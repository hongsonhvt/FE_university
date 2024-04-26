import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Sessions } from '../../shared/api/__generated__/Sessions';

type CalendarDataType = Record<number, { id: string; name: string }[]>;

const CalendarManage = () => {
  const [data, setData] = useState<CalendarDataType>({});
  const [monthYear, setMonthYear] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    new Sessions()
      .getSessionByCondition({
        from: new Date(monthYear.year, monthYear.month + 1, 1).toISOString(),
        to: new Date(monthYear.year, monthYear.month + 2, 0).toISOString(),
      })
      .then((res) => {
        const newData = res.data.data.reduce((acc, x) => {
          const date = new Date(x.startAt).getDate();
          if (!date) {
            return acc;
          }

          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push({ id: x.id, name: x.courseClass.name });

          return acc;
        }, {} as CalendarDataType);
        setData(newData);
      });
  }, [monthYear]);

  const dateCellRender = (value: Dayjs) => {
    // console.log(data);
    return (
      <>
        {(data[value.date()] ?? []).map((evt) => (
          <div
            key={evt.id}
            style={{
              background: '#dddddd',
              borderRadius: '4px',
              padding: '0 4px',
              marginBottom: '2px',
            }}
          >
            {evt.name}
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
    let shouldClearOld = false;
    if (date.month() !== monthYear.month) {
      setMonthYear({ month: date.month(), year: monthYear.year });
      shouldClearOld = true;
    }
    if (date.year() !== monthYear.year) {
      setMonthYear({ month: monthYear.month, year: date.year() });
      shouldClearOld = true;
    }

    if (shouldClearOld) {
      setData({});
    }
  };

  return <Calendar cellRender={cellRender} onChange={onChange} />;
};

export default CalendarManage;
