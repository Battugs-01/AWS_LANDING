import { useCountdown } from "../hooks/useCountDown";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <>
      <div className="w-full rounded-2xl bg-gradient-to-l from-gray-500 via-[#2b303b] to-gray-700  p-0.5">
        <div className=" px-[21px] py-6 text-center bg-[#2b303b] rounded-2xl w-[92px] max-w-[92px]  space-y-2">
          <div className="text-[32px] text-[#F19E38] font-medium">{value}</div>
          <div className="text-[14px] font-light text-gray-200">{type}</div>
        </div>
      </div>
    </>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-8 justify-center items-center font-semibold">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />

      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />

      <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />

      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
