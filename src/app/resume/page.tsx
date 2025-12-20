"use client";

import Button from "@/src/components/UI/Button";
import SkillBlock from "@/src/components/UI/SkillBLock";
import { useState, useEffect } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVuedotjs,
  SiCplusplus,
  SiGit,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";

const Resume = () => {
  const [about, setIsAbout] = useState(false);
  const [skills, setIsSkills] = useState(false);
  const [projects, setIsProjects] = useState(false);

  useEffect(() => {
    setIsAbout(true);
  }, []);

  const buttonConfigs = [
    {
      text: "About me",
      active: about,
      onClick: () => {
        setIsAbout((prev) => !prev);
        setIsSkills(false);
        setIsProjects(false);
      },
    },
    {
      text: "Skills",
      active: skills,
      onClick: () => {
        setIsSkills((prev) => !prev);
        setIsAbout(false);
        setIsProjects(false);
      },
    },
    {
      text: "My Projects",
      active: projects,
      onClick: () => {
        setIsProjects((prev) => !prev);
        setIsAbout(false);
        setIsSkills(false);
      },
    },
  ];

  const technologies = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black" size={80} />,
    },
    {
      name: "React",
      icon: <SiReact className="text-blue-500" size={80} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-500" size={80} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" size={80} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" size={80} />,
    },
    {
      name: "Vue",
      icon: <SiVuedotjs className="text-green-500" size={80} />,
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-700" size={80} />,
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" size={80} />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-400" size={80} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600" size={80} />,
    },
  ];

  return (
    <div className="flex mt-6 md:gap-[200px]">
      <div className="flex flex-col gap-[20px]">
        {buttonConfigs.map((item, idx) => (
          <Button
            backgroundColor="#8783D1"
            className={`w-[150px] h-[36px] ${
              item.active ? "text-white" : "text-[#1C1C22] hover:text-white"
            }`}
            key={idx}
            onClick={item.onClick}
          >
            {item.text}
          </Button>
        ))}
      </div>
      <div className="flex">
        {about && (
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[28px]">Hello, I'm Artyom Vavilov!</h2>
            <p>
              I build fast, engaging websites that work. As a professional
              frontend developer, I bridge the gap between your vision and the
              final product. I take your requirements, analyze the goals, and
              develop a tailored solution focused on user experience,
              performance, and results. Let's create something effective
              together.
            </p>
          </div>
        )}
        {skills && (
          <div className="flex flex-wrap gap-[12px]">
            {technologies.map((item, index) => (
              <SkillBlock
                key={index}
                icon={item.icon}
                text={item.name}
                className="items-center gap-[10px]"
              />
            ))}
          </div>
        )}
        {projects && <div>789</div>}
      </div>
    </div>
  );
};

export default Resume;
