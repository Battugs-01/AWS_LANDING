import DisclosurePage from "./disclosure";
import Location from "./location";

const FAQ = () => {
  return (
    <div className="pt-12 pb-16 gap-16 flex flex-col mx-12" id="faq">
      <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
        <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
          FAQs
        </p>
      </div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-4">
          <Location />
        </div>
        <div className="col-span-8 md:col-span-4 text-white flex justify-start items-start flex-col">
          <DisclosurePage />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
