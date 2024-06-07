import Section from "./Section";
import DisclosurePage from "./disclosure";
import { gameday } from "../assets";

const Gameday = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="relative mx-10">
        <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
          <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
            Gameday Competition
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-5 md:flex-row mt-20">

          <div
            className="!text-gray-100 leading-[150%] flex flex-col gap-8 pb-4 px-4 md:w-full font-medium"
          >
            <div className="col-span-8 md:col-span-4 text-white flex justify-start items-start flex-col">
              <p className="mb-4"><b className="text-red-500">3 MILLION MNT PRIZE POOL</b> This year’s Community Day event features a new category: the AWS Gameday competition. 🌐💻</p>

              <h2 className="text-2xl font-bold mb-2">IN BRIEF:</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Compete by creating infrastructure, debugging code, and solving questions to earn points in a specially prepared AWS cloud environment. 🚀🧩</li>
                <li>Each team will have 4-5 engineers. 👥👥</li>
                <li>All rules, scoring systems, competition environments, and accounts will be provided. 📋🖥️</li>
                <li>Points will be deducted for incorrect tasks. Additionally, it is possible to attack and disrupt the infrastructure of competing teams. ❌⚔️</li>
              </ul>
              <DisclosurePage />
            </div>
          </div>
          <div className="md:w-full">
            <div
              className="leading-[150%]  md:w-full h-[700px] rounded-bl-[32px] rounded-br-[32px]"
              style={{
                borderRadius: "0 0 32px 32px",
              }}
            >
              <img
                src={gameday}
                className="rounded-3xl object-cover w-full transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Gameday;
