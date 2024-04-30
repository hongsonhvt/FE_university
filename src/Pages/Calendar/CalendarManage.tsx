import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useReducer, useState } from 'react';
import { Sessions } from '../../shared/api/__generated__/Sessions';

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
    new Sessions()
      .getSessionByCondition({
        from: new Date(monthYear.year, monthYear.month - 1, 1).toISOString(),
        to: new Date(monthYear.year, monthYear.month + 2, 1).toISOString(),
      })
      .then((res) => {
        const newData = res.data.data.reduce((acc, x) => {
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
        setData(newData);
      });
  }, [monthYear]);

  const dateCellRender = (value: Dayjs) => {
    // console.log(data);
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
          >
            {evt.name} ({evt.startAt} - {evt.endAt})
          </div>
        ))}
      </>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
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

  return (
    <Calendar
      cellRender={cellRender}
      onChange={onChange}
      style={{ height: '100%' }}
    />
  );
};

export default CalendarManage;
