import React from 'react';

enum WeekDays {
  MON = 'MON',
  TUES = 'TUES',
  WEDNES = 'WEDNES',
  TYHURS = 'TYHURS',
  FRI = 'FRI',
}

const MyComponent = () => {
  type WeekDayKey = keyof typeof WeekDays;

  function printDay(key: WeekDayKey, message: string) {
    const day = WeekDays[key];

    if (day <= WeekDays.WEDNES) {
      console.log(`day:${day}, ${message}`);
    }
  }

  printDay('TUES', 'test');

  const booleanType = {
    false: 0,
    true: 1,
  } as const;

  type X = (typeof booleanType)[keyof typeof booleanType];

  let noticePopup: Record<string, never>;

  console.log('noticePopup:', noticePopup);

  return <div></div>;
};

export default MyComponent;
