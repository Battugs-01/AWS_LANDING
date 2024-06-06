/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Schedules = () => {
  const [showConference, setShowConference] = useState(true);

  const toggleSchedule = () => {
    setShowConference(!showConference);
  };
  return (
    <div
      className="container mx-auto py-32 gap-16 flex flex-col"
      id="schudules"
    >
      <div className="flex flex-col items-center gap-4 self-stretch md:px-5">
        <p className="text-[64px] bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent">
          Schedules
        </p>
      </div>
      {showConference ? (
        <div className="rounded-[25px] border border-white overflow-hidden w-full bg-[#28242c]">
          <div className="flow-root  mx-auto ">
            <div className="-my-4  divide-gray-200 ">
              <div className="gap-2 sm:gap-6 grid grid-cols-9">
                <div className="flex flex-col gap-2 w-40  pt-4  mt-4 col-span-1 items-center justify-center">
                  <p className=" text-lg font-meduim text-white text-center shrink-0 mb-3 md:flex hidden">
                    Time/Track
                  </p>
                </div>
                <p
                  className={`text-lg font-semibold col-span-4 flex justify-center items-center mt-4 hover:cursor-pointer hover:text-[20px] ${showConference ? "text-[#F19E38]" : "text-white"
                    }`}
                  onClick={() => toggleSchedule()}
                >
                  Conference - June 14
                </p>
                <div className="col-span-1 border-l border-white h-full"></div>
                <p
                  className={`text-lg font-semibold col-span-3 flex justify-center items-center mt-4 hover:cursor-pointer hover:text-[20px] ${!showConference ? "text-[#F19E38]" : "text-white"
                    }`}
                  onClick={() => toggleSchedule()}
                >
                  Gameday - June 15
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    12:00 - 12:45
                  </p>
                </div>
                <p className="text-lg text-white   flex text-left items-center pl-2">
                  Registration, Networking & Coffee
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4 md:col-span-2  col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    12:45-12:55
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left items-center md:col-span-3  col-span-4 pl-2">
                  Opening Welcome - AWS User Group of Mongolia organizing team
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 md:col-span-2 col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    12:50 - 13:15
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  AWS Ramp-Up Guide: Internet of Things | Batulzii Dashtseren - Founder, CEO of SanchirTech  IOT
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    13:15 - 13:40
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Karpenter: Efficient scaling of Kubernetes clusters | Viktor Vedmich - Sr. Developer Advocate of AWS  DevOps
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    13:40 - 14:05
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Leveraging AWS for Climate Impact | Purevdondov Enkhbayar - Tech Lead of URECA  Architecture
                </p>
              </div>
              <div className="border-b border-white w-full"></div>{" "}
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    14:05 - 14:30
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Fireside Chat with Gundsambuu: Success Scaling a Tech Platform in the Uzbekistani Market
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    14:30 - 14:55
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Building Observability to increase resiliency | Guillermo Ruiz - Sr. Developer Advocate of AWS  DevOps
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    14:55 - 15:10
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Zero Trust in Cloud | Oleg Zolboobayar - Co-Founder, CTO of Meta Global Inc  Security
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2 ">
                  <p className=" text-lg text-white text-center shrink-0">
                    15:10 - 15:40
                  </p>
                </div>
                <p className="text-lg text-white flex justify-start items-center md:col-span-3 col-span-4 pl-3">
                  Just-in-Time Access for AWS IAM Identity Center | Anton Eremin - Cloud Architecture Specialist of FivexL  Management
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4   md:col-span-2 col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    15:40 - 16:10
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Coffee break & Networking
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2 ">
                  <p className=" text-lg text-white text-center shrink-0">
                    16:10 - 16:25
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Technical foundations of Tapatrip.mn | Erdenebileg Chinchuluun, CTO of Tapatrip  Architecture
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4   md:col-span-2 col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    16:25 - 16:50
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Alexandr Bernadskiy - Solutions Architect of AWS  Frontend development
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2 ">
                  <p className=" text-lg text-white text-center shrink-0">
                    16:50 - 17:05
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Road to AWS Machine Learning Specialty | Tuvshin Otgonpurev - GenAI Developer at Rio Tinto  GenAI
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 pb-5">
                <div className="flex flex-col gap-2 w-40  py-4   md:col-span-2 col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    17:05 - 17:35
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left  items-center md:col-span-3 col-span-4 pl-2">
                  Kahoot quiz / Closing Address / Photo
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-[25px] border border-white overflow-hidden w-full bg-[#28242c]">
          <div className="flow-root  mx-auto ">
            <div className="-my-4  divide-gray-200 ">
              <div className="gap-2 sm:gap-6 grid grid-cols-9">
                <div className="flex flex-col gap-2 w-40  pt-4  mt-4 col-span-1 items-center justify-center">
                  <p className=" text-lg font-meduim text-white text-center shrink-0 mb-3 md:flex hidden">
                    Time/Track
                  </p>
                </div>
                <p
                  className={`text-lg font-semibold col-span-4 flex justify-center items-center mt-4 hover:cursor-pointer hover:text-[20px] ${showConference ? "text-[#F19E38]" : "text-white"
                    }`}
                  onClick={() => toggleSchedule()}
                >
                  Conference - June 14
                </p>
                <div className="col-span-1 border-l border-white h-full"></div>
                <p
                  className={`text-lg font-semibold col-span-3 flex justify-center items-center mt-4 hover:cursor-pointer hover:text-[20px] ${!showConference ? "text-[#9CCC9C]" : "text-white"
                    }`}
                  onClick={() => toggleSchedule()}
                >
                  Gameday - June 15
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#688068] py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    12:00 - 12:30
                  </p>
                </div>
                <p className="text-lg text-white   flex text-left items-center col-span-3">
                  Collecting Teams & Team Dividing
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4  md:col-span-2 col-span-4">
                  <p className=" text-lg text-white text-center shrink-0">
                    12:30 - 13:00
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left items-center md:col-span-3 col-span-4">
                  Introduction & Setup
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#688068] py-4 col-span-2 ">
                  <p className=" text-lg text-white text-center shrink-0">
                    13:00 - 17:00
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left items-center col-span-3">
                  The Game
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 pb-5">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg text-white text-center shrink-0">
                    17:00 - 17:30
                  </p>
                </div>
                <p className="text-lg text-white  flex text-left items-center col-span-3">
                  Closing
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedules;
