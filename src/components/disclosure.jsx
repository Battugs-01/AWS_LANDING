/* eslint-disable react/no-unescaped-entities */
import { Disclosure } from "@headlessui/react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
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
                  <span>WHO CAN PARTICIPATE??</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  <ul className="list-disc list-inside mb-4">
                    <li>Anyone working with AWS or engineers in Software, Network, DevOps, Cloud, Security, and related fields. 💼💡</li>
                    <li>DevOps, Cloud, Software, Security, Network engineers 🛠️🔧</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>HOW TO PARTICIPATE?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  <ul className="list-disc list-inside mb-4">
                    <li>Register at <a href="https://lu.ma/1tuehhqq" className="text-blue-500">https://lu.ma/1tuehhqq</a> and enable the Gameday participation option. 📝✔️</li>
                    <li>Each participant must belong to a team. If you have already formed a team, mention the team name in the registration form.</li>
                    <li>Organizers will confirm team registration the day before the competition and notify you by phone. 📞📋</li>
                    <li>If you don’t have a team, organizers will assign you to one based on your skills. Don’t worry about not having a team. 👥🤝</li>
                    <li>Feel free to join; it’s really fun. 🎉😄</li>
                    <li>Bring your own laptop on the competition day. The competition runs from 12 PM to 5 PM. 💻⏰</li>
                    <li>Coffee and snacks will be provided during the competition. ☕🥪</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>WHAT IF I'M NOT EXPERIENCED?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  <ul className="list-disc list-inside mb-4">
                    <li>AWS is very beginner-friendly with abundant guides and documentation. Instructions will appear as you complete tasks, and you can use Amazon Q AI assistant or Chat GPT for help. 📚🤖</li>
                    <li>If you have technical thinking and courage, we believe you have a great chance to compete. 💪🤓</li>
                    <li>Organizers will also provide subtle guidance throughout the competition. 👀🔄</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>WHAT ARE THE PRIZES?</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  <ul className="list-disc list-inside mb-4">
                    <li>The winning team will receive 1 million MNT and AWS merch. Runner-up teams will receive smaller cash prizes and gifts. 🥇🥈🥉🎁</li>
                    <li>Each participant will receive a gift. 🎁👕</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="border-b border-white w-full my-5"></div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[#fff] flex w-full justify-between  text-left text-lg font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>AWS SERVICES USED IN THE COMPETITION (HINT):</span>
                  <MdOutlineKeyboardArrowUp
                    className={`${open ? "rotate-180 transform" : ""
                      } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white-500">
                  <ul className="list-disc list-inside mb-4">
                    <li>S3 📂</li>
                    <li>S3 static website 🖥️</li>
                    <li>EC2 💻</li>
                    <li>Auto Scaling Group 📈</li>
                    <li>Elastic Load Balancer ⚖️</li>
                    <li>Code Pipeline, Code Build, Code Commit & Code Deploy 🛠️</li>
                    <li>SQS 📨</li>
                    <li>Lambda 🔄</li>
                    <li>AWS Glue 🧪</li>
                    <li>AWS Athena 📊</li>
                    <li>Rekognition 👁️</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

        </div>
      </div>
    </>
  );
}
