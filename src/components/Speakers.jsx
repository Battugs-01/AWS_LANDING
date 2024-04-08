/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { speakers } from "../constants";
import Section from "./Section";

const Speakers = () => {
  return (
    <Section id="speakers" className={"mt-10"}>
      <div className="mx-10 relative z-2">
        <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
          <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
            Speakers
          </p>
          <p className="text-center leading-[150%] text-[24px] md:w-4/5 lg:w-4/6 w-full">
            <span className="text-[#EAECF0]">Join the second&nbsp;</span>
            <span className="text-[#F19E38]">
              AWS Community Day in Ulaanbaatar!&nbsp;
            </span>
            <span className="text-[#EAECF0]">
              Engage with cloud experts, explore advanced topics, and network
              with like-minded individuals. Enhance your cloud skills at this
              special event!
            </span>
          </p>
        </div>
        {/* <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((item) => (
            // <div className="flex flex-col items-center gap-2" key={item.id}>
            //   <img
            //     src={item.backgroundUrl}
            //     alt={item.name}
            //     className="w-40 h-40 rounded-full object-cover"
            //   />
            //   {/* <p className="text-[#EAECF0] text-[24px] font-bold">
            //     {item.name}
            //   </p>
            //   <p className="text-[#F19E38] text-[20px]">{item.position}</p>
            //   <a
            //     href={item.linkeden}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="flex items-center gap-1"
            //   >
            //     <p className="text-[#EAECF0] text-[20px]">Linkedin</p>
            //   </a> */}
            // </div>
            <img src={item.backgroundUrl} alt="" />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Speakers;
