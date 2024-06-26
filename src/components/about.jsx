import { useRef } from "react";
import Section from "./Section";
import ReactPlayer from "react-player";
import SlideUpWhenVisible from "./animate_when_visible";

const About = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="relative mx-10" ref={parallaxRef}>
        <div className="flex flex-col gap-4 rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px]  bg-gradient pt-5 md:flex-row">
          <SlideUpWhenVisible
            from="right"
            className="text-[32px] !text-gray-100 leading-[150%] flex flex-col gap-8 pb-4 px-4 md:w-full font-medium text-center"
          >
            <div className="flex  flex-col gap-8 pb-4 pl-4 md:w-full text-start items-center">
              <p className="md:w-4/5 w-full">
                Mongolia is known as the &#39;Land of Eternal Blue Sky,&#39; and
                its tech scene shows great promise. Don&#39;t just take our word
                for it; join us!
              </p>
              <p className="md:w-4/5 w-full">
                Thousands of cloud enthusiasts will gather to discuss advanced
                cloud technology.
              </p>
              <p className="md:w-4/5 w-full">
                This time, we&#39;re organizing our second-largest cloud event
                in the capital city of Ulaanbaatar.
              </p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible from="left" className="md:w-full">
            <div
              className="leading-[150%]  md:w-full h-[700px] rounded-bl-[32px] rounded-br-[32px]"
              style={{
                borderRadius: "0 0 32px 32px",
              }}
            >
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=gtAT7Eh6__M" || ""}
                width={"100%"}
                height={"100%"}
                controls={false}
                config={{
                  youtube: {
                    playerVars: { disablekb: 1, modestbranding: 0 },
                  },
                }}
              />
            </div>
          </SlideUpWhenVisible>
        </div>
      </div>
    </Section>
  );
};

export default About;
