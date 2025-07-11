"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Slack",
    iconType: ChromeIcon,
  },
  {
    title: "Bootstrap",
    iconType: ChromeIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Eating",
    emoji: "🍴🍜",
    left: "5%",
    top: "5%",
  },
  {
    title: "Sleeping",
    emoji: "🛌",
    left: "50%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "35%",
    top: "40%",
  },
  {
    title: "Listening",
    emoji: "👂",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Other Skills"
                description="Explore My Other skills  "
              />

              <div className="w-full flex flex-col gap-2 mx-auto mt-2 md:mt-0 ">
                {/* <Image src={bookImage} alt="Book cover" />
                <ul className="list-disc pl-10 text-sm ">
                  <li>Virtual Administrative Assistant</li>
                  <li>Microsoft Office Suite</li>
                  <li>Customer care and representative</li>
                  <li>Team Work & Collaboration</li>
                  <li>Excellent Communication Skill</li>
                  <li>Figma Designer</li>
                </ul> */}
                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Virtual Administrative Assistant</p>
                  <hr
                    style={{ width: "30%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Customer Care and Representative</p>
                  <hr
                    style={{ width: "22%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Microsoft Office Suite</p>
                  <hr
                    style={{ width: "46%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Team Work & Collaboration</p>
                  <hr
                    style={{ width: "35%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Excellent Communication Skill</p>
                  <hr
                    style={{ width: "30%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Figma Designer</p>
                  <hr
                    style={{ width: "40%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>
                 <div className="flex gap-2 items-center text-xs transition duration-300">
                  <p className="pl-4">Copy writing</p>
                  <hr
                    style={{ width: "60%" }}
                    className="outline-none border border-none w-1/2 h-2 rounded-[50px] bg-gradient-to-r from-emerald-300 to-sky-400"
                  />
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 ">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 ">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
