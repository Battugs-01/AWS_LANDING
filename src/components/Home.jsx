import { useRef } from "react";
import Section from "./Section";
import Button from "./Button";
import Countdown from "./CountDown";
import SlideUpWhenVisible from "./animate_when_visible";
import { Link } from "react-router-dom";
const Home = () => {
  const parallaxRef = useRef(null);

  const THREE_DAYS_IN_MS = 65 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <Section
        className="pt-[10rem] -mt-[5.25rem]"
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="home"
      >
        <SlideUpWhenVisible from="top">
          <div className="relative mx-10" ref={parallaxRef}>
            <div className="md:flex w-full items-center justify-center gap-2.5 rounded-bl-[32px] rounded-br-[32px] opacity-0.15 hidden">
              <div className="w-full">
                <div className="w-full">
                  <img
                    src="home/bg-3.jpg"
                    alt="placeholder_one"
                    className="h-[357px] w-full rounded-[48px] object-cover md:h-auto"
                  />
                  <img
                    src="home/bg-7.jpg"
                    alt="placeholder"
                    className="mt-2.5 h-[397px] w-full rounded-[48px] object-cover md:h-auto"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-2.5">
                  <img
                    src="home/bg-2.jpg"
                    alt="placeholder"
                    className="h-[193px] rounded-[32px] object-cover"
                  />
                  <img
                    src="home/bg-1.jpg"
                    alt="placeholder"
                    className="h-[193px] rounded-[32px] object-cover"
                  />
                </div>
                <img
                  src="home/bg-4.jpg"
                  alt="placeholder"
                  className=" h-[368px] w-full rounded-[48px] object-cover md:h-auto"
                />
              </div>
              <div className="w-full">
                <img
                  src="home/bg-5.jpg"
                  alt="placeholder"
                  className="h-[357px] w-full rounded-[48px] object-cover md:h-auto "
                />
                <img
                  src="home/bg-6.jpg"
                  alt="placeholder"
                  className="mt-2.5 h-[397px] w-full rounded-[48px] object-cover md:h-auto"
                />
              </div>
            </div>
            <div className="md:absolute left-0 right-0 top-0 m-auto w-full rounded-bl-[32px] rounded-br-[32px] bg-gradient1 md:pb-5 container flex">
              <div>
                <div className="flex flex-col items-center gap-16 pt-12 md:pt-5 sm:gap-8 justify-start">
                  <div className="flex flex-col items-center gap-4 self-stretch md:px-5 py-0">
                    <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
                      AWS Community Day Ulaanbaatar 2024
                    </p>
                    <p className="text-center leading-[150%] text-[24px]">
                      <span className="text-[#EAECF0]">
                        Join the second&nbsp;
                      </span>
                      <span className="text-[#F19E38]">
                        AWS Community Day in Ulaanbaatar!&nbsp;
                      </span>
                      <span className="text-[#EAECF0]">
                        Engage with cloud experts, explore advanced topics, and
                        network with like-minded individuals. Enhance your cloud
                        skills at this special event!
                      </span>
                    </p>
                  </div>
                  <div className="text-[#EAECF0] m-0 p-0 text-[20px]">
                    2024 June 14-15
                  </div>
                  <Countdown targetDate={dateTimeAfterThreeDays} />
                  <div className="flex gap-5 mt-6">
                    <Link to={"https://events.awsmongolia.com/"}>
                      <Button white>Register</Button>
                    </Link>
                    <a href="mailto:ganjiguur.n@gmail.com ">
                      <Button className={undefined}>Contact us</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideUpWhenVisible>
      </Section>
    </div>
  );
};

export default Home;
