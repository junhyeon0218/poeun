'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setTime(now);

    const nextMinute = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes() + 1,
      0,
      0,
    );
    const timeUntilNextMinute = nextMinute.getTime() - now.getTime();

    const initialTimer = setTimeout(() => {
      setTime(new Date());

      const regularTimer = setInterval(() => {
        setTime(new Date());
      }, 60000);

      return () => clearInterval(regularTimer);
    }, timeUntilNextMinute);

    return () => clearTimeout(initialTimer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${ampm}`;
  };

  return <div className='text-[14px] font-semibold'>{time ? formatTime(time) : '--:-- --'}</div>;
}
