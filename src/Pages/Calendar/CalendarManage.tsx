import type { CalendarProps } from 'antd';
import { Calendar, Drawer, Spin } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useReducer, useState } from 'react';
import { Sessions } from '../../shared/api/__generated__/Sessions';
import { Teachers } from '../../shared/api/__generated__/Teachers';
import {
  SessionListItemDto,
  TeacherSimpleDto,
} from '../../shared/api/__generated__/data-contracts';
import CalendarManagePanel from './CalendarManagePanel';

type CalendarDataType = Record<
  string,
  { id: string; name: string; startAt: string; endAt: string }[]
>;

type CalendarStateType = {
  month: number;
  year: number;
};

const CalendarManage = () => {
  const [data, setData] = useState<CalendarDataType>({});
  const [teachers, setTeachers] = useState<TeacherSimpleDto[]>([]);
  const [openSessionId, setOpenSessionId] = useState<string | null>(null);
  const [monthYear, dispatchMonthYear] = useReducer(
    (state: CalendarStateType, action: Partial<CalendarStateType>) => {
      return { ...state, ...action };
    },
    {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
  );

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    new Sessions()
      .getSessionByCondition({
        from: new Date(monthYear.year, monthYear.month - 1, 1).toISOString(),
        to: new Date(monthYear.year, monthYear.month + 2, 1).toISOString(),
      })
      .then((res) => {
        const newData = mapToCalendarData(res.data.data);
        setData(newData);
      });
  }, [monthYear]);

  const onClickSession = (sessionId: string) => {
    setOpenSessionId(sessionId);
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') {
      return dateCellRender(data, current, onClickSession);
    }
    return info.originNode;
  };

  const onChange: CalendarProps<Dayjs>['onChange'] = (date) => {
    if (date.month() !== monthYear.month) {
      dispatchMonthYear({ month: date.month() });
    }
    if (date.year() !== monthYear.year) {
      dispatchMonthYear({ year: date.year() });
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await new Teachers().findTeachersByCondition({});
      setTeachers(response.data.data);
    } catch (error) {
      console.error('Error fetching course class:', error);
    }
  };

  if (!Object.keys(data).length) {
    console.log('ok');
    return <Spin />;
  }

  return (
    <>
      <Calendar
        cellRender={cellRender}
        onChange={onChange}
        style={{ height: '100%' }}
      />
      <Drawer onClose={() => setOpenSessionId(null)} open={!!openSessionId}>
        <CalendarManagePanel sessionId={openSessionId} teachers={teachers} />
      </Drawer>
    </>
  );
};

const dateCellRender = (
  data: CalendarDataType,
  value: Dayjs,
  onClickSession: (sessionId: string) => void,
) => {
  return (
    <>
      {(data[value.format('YYMMDD')] ?? []).map((evt) => (
        <div
          key={evt.id}
          style={{
            background: '#dddddd',
            borderRadius: '4px',
            padding: '0 4px',
            marginBottom: '2px',
          }}
          onClick={() => {
            onClickSession(evt.id);
          }}
        >
          {evt.name} ({evt.startAt} - {evt.endAt})
        </div>
      ))}
    </>
  );
};

const mapToCalendarData = (data: SessionListItemDto[]): CalendarDataType => {
  const newData = data.reduce((acc, x) => {
    const date = dayjs(x.startAt).format('YYMMDD');
    if (!date) {
      return acc;
    }

    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push({
      id: x.id,
      name: x.courseClass.name,
      startAt: dayjs(x.startAt).format('HH:mm'),
      endAt: dayjs(x.endAt).format('HH:mm'),
    });

    return acc;
  }, {} as CalendarDataType);

  return newData;
};

export default CalendarManage;
