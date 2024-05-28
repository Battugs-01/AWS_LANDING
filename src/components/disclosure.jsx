import { Disclosure } from "@headlessui/react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { speakers } from "../constants";
export default function DisclosurePage() {
  return (
    <>
      <div className="border-b border-white w-full mt-1"></div>
      <div className="w-full px-1 pt-5">
        <div className=" w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>When will it be held?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  The event is scheduled for June 14th-15th, Friday to Saturday.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>Who are the speakers?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  {
                    speakers.map((e) => <div key={e.id} className="m-2">
                      {e.name} - {e.position}
                    </div>)
                  }
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>What language will it be in?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  The event will be conducted in Mongolian, with English
                  preferred for the speakers.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>What is GameDay?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  AWS GameDay is a gamified learning event that challenges
                  participants to use AWS solutions to solve real-world
                  technical problems in a team-based setting. Unlike traditional
                  workshops, GameDays are open-ended and non-prescriptive,
                  allowing participants the freedom to explore and think outside
                  the box. Learn more at https://aws.amazon.com/gameday/.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
