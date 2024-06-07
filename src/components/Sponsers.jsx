import Section from "./Section";
import SlideUpWhenVisible from "./animate_when_visible";
import { aws, cody, sanchirtech } from "../assets";
const Sponsers = () => {
  return (
    <Section id="sponsors" className={"mt-10"}>
      <SlideUpWhenVisible className="mx-10" from="top">
        <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
          <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
            Sponsors
          </p>
        </div>
        <div className="flex flex-col items-center gap-[85px] px-14 py-16 md:gap-[63px] md:p-5 sm:gap-[42px] mt-10">
          <div className="flex flex-1 flex-col md:flex-row items-center gap-14 pt-[5px]">
            <div className="rounded-lg">
              <img
                src={aws}
                alt="AWS"
                className=" rounded-full w-full"
              />
            </div>
            <div>
              <img
                src={cody}
                alt="Cody"
                className=" rounded-full w-full"
              />
            </div>
            <div>
              <img
                src={sanchirtech}
                alt="Sanchirtech"
                className=" rounded-full w-full"
              />
            </div>
          </div>
        </div>
      </SlideUpWhenVisible>
    </Section>
  );
};

export default Sponsers;
