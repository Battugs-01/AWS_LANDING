import { linkeden2 } from "../assets";
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
        </div>
        <div className="flex items-center justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 self-stretch">
            {speakers.map((item) => (
              <>
                <div className="flex flex-col gap-4  group" key={item.key}>
                  <div className="relative group">
                    <img
                      src={item.backgroundUrl}
                      key={item.id}
                      width={400}
                      height={400}
                      className="rounded-3xl object-cover h-[400px]  w-full transition duration-300 filter  hover:blur-[5px]"
                    />
                    <a
                      href={item.linkeden}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition duration-300 z-10 opacity-0 group-hover:opacity-100"
                    >
                      <img src={linkeden2} alt="link" key={`${item.id}-btn`} />
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-center gap-[5px]"
                    key={item.key}
                  >
                    <p className="text-center text-gray-100 text-2xl font-bold">
                      {item.name}
                    </p>
                    <p className="text-center text-gray-100 text-lg font-normal">
                      {item.position}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Speakers;
