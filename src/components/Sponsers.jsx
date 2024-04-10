import { DaimondSponsors, GoldSponsors } from "../constants";
import { cn } from "../lib/utils";
import Section from "./Section";
import SlideUpWhenVisible from "./animate_when_visible";

const Sponsers = () => {
  return (
    <Section id="sponsors" className={"mt-10"}>
      <SlideUpWhenVisible className="mx-10" from="top">
        <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
          <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
            Sponsors
          </p>
        </div>
        <div className="flex flex-col items-center gap-[85px] px-14 py-16 md:gap-[63px] md:p-5 sm:gap-[42px]">
          <div className="flex flex-1 flex-col items-center gap-7 pt-[5px]">
            <p className="bg-gradient3 bg-clip-text text-center !text-transparent text-2xl">
              Diamond
            </p>
            {/* <div className="flex flex-col gap-6 self-stretch">
              <div className="flex gap-12 px-[116px] md:flex-row md:px-5">
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_relume_black.png"
                  alt="relumeblack_one"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_relume_black.png"
                  alt="relumeblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_relume_black.png"
                  alt="relumeblack"
                  className="h-[56px] w-full object-cover"
                />
              </div>
              <div className="flex gap-12 px-[116px] md:flex-row  md:px-5">
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_relume_black.png"
                  alt="relumeblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_relume_black.png"
                  alt="relumeblack"
                  className="h-[56px] w-full object-cover"
                />
                <img
                  src="images/img_webflow_black.png"
                  alt="webflowblack"
                  className="h-[56px] w-full object-cover"
                />
              </div>
            </div> */}
            <div className="w-[70%]">
              <InfiniteSlider logos={DaimondSponsors} direction="right" />
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-7 pt-[5px]">
            <p className="bg-gradient4 bg-clip-text text-center !text-transparent text-2xl">
              Gold
            </p>
            <div className="w-[70%]">
              <InfiniteSlider logos={GoldSponsors} direction="left" />
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-7 pt-[5px]">
            <p className="bg-gradient5 bg-clip-text text-center !text-transparent text-2xl">
              Digital
            </p>
            <div className="w-[70%]">
              <InfiniteSlider logos={DaimondSponsors} direction="right" />
            </div>
          </div>
        </div>
      </SlideUpWhenVisible>
    </Section>
  );
};

const InfiniteSlider = ({ logos, direction }) => {
  return (
    <div className="w-[80%]">
      <div className=" w-[100wv] ">
        <div
          className={cn(
            "animate-infinite-slider flex gap-4 items-center whitespace-nowrap",
            direction === "right"
              ? "animate-infinite-slider"
              : "animate-infinite-slider2"
          )}
        >
          {logos.map((card, index) => (
            <div
              key={`hgf-${index}`}
              className="flex items-center gap-2 min-w-[200px] min-h-[50px] justify-center"
            >
              <img src={card.src} alt={card.alt} width={130} height={130} />
            </div>
          ))}
          {logos.map((card, index) => (
            <div
              key={`hgf-${index}`}
              className="flex items-center gap-2  min-w-[200px] min-h-[50px] justify-center"
            >
              <img src={card.src} alt={card.alt} width={130} height={130} />
            </div>
          ))}
          {logos.map((card, index) => (
            <div
              key={`hgf-${index}`}
              className="flex items-center gap-2  min-w-[200px] min-h-[50px] justify-center"
            >
              <img src={card.src} alt={card.alt} width={130} height={130} />
            </div>
          ))}
          {logos.map((card, index) => (
            <div
              key={`hgf-${index}`}
              className="flex items-center gap-2  min-w-[200px] min-h-[50px] justify-center"
            >
              <img src={card.src} alt={card.alt} width={130} height={130} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sponsers;
