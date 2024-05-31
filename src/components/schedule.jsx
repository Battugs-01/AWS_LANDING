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
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    12:00 - 12:45
                  </p>
                </div>
                <p className="text-lg font-semibold text-white   flex justify-left items-center pl-2">
                  Registration, Networking & Coffee
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4 md:col-span-2  col-span-4">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    12:45-13:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left items-center md:col-span-3  col-span-4 pl-2">
                  Opening Welcome - AWS User Group of Mongolia organizing team
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 md:col-span-2 col-span-4">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    13:00-13:20
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Think Big, Think Community - Maria Encinar | AWS User Group Programm Global Lead
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    13:20-14:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Viktor Vedmich - Karpenter: Efficient scaling of Kubernetes clusters Nominated
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    14:00-14:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  AWS Ramp-Up Guide: Internet of Things | Batulzii Dashtseren - Founder, CEO of SanchirTech
                </p>
              </div>
              <div className="border-b border-white w-full"></div>{" "}
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    14:30-15:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Coffee break & Networking
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    15:00-15:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Building Observability to increase resiliency | Guillermo Ruiz - Sr. Developer Advocate of AWS
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    15:30-16:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Zero Trust in Cloud | Oleg Zolboobayar - Co-Founder, CTO of Meta Global Inc
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2 ">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    16:00-16:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Just-in-Time Access for AWS IAM Identity Center | Anton Eremin - Cloud Architecture Specialist of FivexL
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4   md:col-span-2 col-span-4">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    16:30-17:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
                  Leveraging AWS for Climate Impact | Purevdondov Enkhbayar - Tech Lead of URECA
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20">
                <div className="flex flex-col gap-2 w-40 bg-[#8C7D6B] py-4 col-span-2 ">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    17:00-17:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left  items-center md:col-span-3 col-span-4 pl-2">
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
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    9:00 - 9:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white   flex justify-left items-center col-span-3">
                  Intro
                </p>
              </div>
              <div className="border-t border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4  md:col-span-2 col-span-4">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    9:30 - 10:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left items-center md:col-span-3 col-span-4">
                  Collecting teams
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40 bg-[#688068] py-4 col-span-2 ">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    10:00 - 15:00
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left items-center col-span-3">
                  The Game
                </p>
              </div>
              <div className="border-b border-white w-full"></div>
              <div className="flex gap-4 sm:gap-20 ">
                <div className="flex flex-col gap-2 w-40  py-4 col-span-2">
                  <p className=" text-lg font-bold text-white text-center shrink-0">
                    15:00 - 15:30
                  </p>
                </div>
                <p className="text-lg font-semibold text-white  flex justify-left items-center col-span-3">
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
