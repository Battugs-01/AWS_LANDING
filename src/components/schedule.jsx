const Schedules = () => {
  return (
    <div className="container mx-auto py-32 gap-16 flex flex-col">
      <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
        Schedules
      </p>
      <div className="rounded-lg grid grid-cols-7 border border-white overflow-hidden w-full">
        <div>Time/Track</div>
        <div className="flex justify-center items-center col-span-3">
          Conference
        </div>
        <div className="flex justify-center items-center col-span-3">
          Gameday
        </div>

        <div>8:00 - 9:00</div>
        <div className="flex justify-center items-center col-span-6">
          Registration & Breakfast
        </div>
      </div>
    </div>
  );
};

export default Schedules;
