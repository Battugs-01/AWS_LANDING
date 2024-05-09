import React, { useState, useEffect } from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <>
      <div className="md:w-full w-4/5 rounded-2xl bg-gradient-to-l from-gray-500 via-[#2b303b] to-gray-700 p-0.5">
        <div className="px-[21px] py-6 text-center bg-[#2b303b] rounded-2xl md:w-[92px] md:max-w-[92px]  space-y-2 w-[74px] max-w-[74px] ">
          <div className="md:text-[32px] text-[28px] text-[#F19E38] font-medium">
            {value}
          </div>
          <div className="md:text-[14px] text-xs font-light text-gray-200 text-center">
            {type}
          </div>
        </div>
      </div>
    </>
  );
};

export default function Counter() {
  var countDownDate = new Date("June 14,2024, 12:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      var distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      {days > 0 ||
        hours > 0 ||
        minutes > 0 ||
        (seconds > 0 && (
          <div className="flex gap-8 justify-center items-center font-semibold">
            <DateTimeDisplay value={days} type={"Days"} />

            <DateTimeDisplay value={hours} type={"Hours"} />

            <DateTimeDisplay value={minutes} type={"Min"} />

            <DateTimeDisplay value={seconds} type={"Seconds"} />
          </div>
        ))}
    </div>
  );
}
