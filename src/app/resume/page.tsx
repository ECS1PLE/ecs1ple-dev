"use client";

import Button from "@/src/components/UI/Button";
import SkillBlock from "@/src/components/Blocks/SkillBLock";
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
  SiRedux,
  SiPython,
} from "react-icons/si";
import ProjectBlock from "@/src/components/Blocks/ProjectBlock";

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
      name: "Redux Toolkit",
      icon: <SiRedux className="text-purple-600" size={80} />,
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
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-700" size={80} />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-yellow-500" size={80} />,
    },
  ];

  const myProjects = [
    {
      title: "Svetlana Minina — Business Coach Landing",
      description:
        "Responsive landing page for a business coach with contact form and basic SEO optimizations. Built with React and TypeScript; focused on accessibility and performance.",
      link: "https://svetlana-minina.vercel.app/",
      haveLink: true,
    },
    {
      title: "ecs1ple.dev — Personal Website",
      description:
        "My personal portfolio and blog showcasing projects, experiments and articles. Built with Next.js, TypeScript and Tailwind CSS.",
      link: "https://ecs1ple-dev.vercel.app/",
      haveLink: false,
    },
    {
      title: "StudyHelper (in development)",
      description:
        "A collaborative platform for students to share solutions and study materials. Features planned: authentication, content tagging, and moderation. Stack: Next.js, Tailwind, TypeScript, Node.js, Docker.",
      haveLink: false,
    },
    {
      title: "Aeterna — AI Website Builder",
      description:
        "A product concept and prototype for generating complete websites using AI. Focused on automating layout, copy and assets generation. Built with Next.js, TypeScript and Tailwind CSS.",
      link: "https://aeterna-blue.vercel.app/",
      haveLink: true,
    },
    {
      title: "Aeterna SSO",
      description:
        "Single Sign-On service for the Aeterna platform: authentication flow and session management for multi-app integrations.",
      link: "https://aeterna-sso.vercel.app/",
      haveLink: true,
    },
    {
      title: "StellarBurger — Order Management Web App",
      description:
        "A web application to optimize customer orders and restaurant workflows. Implemented with React, TypeScript, Redux and Tailwind CSS.",
      haveLink: true,
      link: "https://stellar-burger-psi.vercel.app/",
    },
    {
      title: "Telegram Gift Roulette",
      description:
        "A Telegram bot that runs a random gift roulette for chat participants. Implemented in plain JavaScript and published on GitHub.",
      link: "https://github.com/ECS1PLE/tg-gift-bot",
      haveLink: true,
    },
    {
      title: "Pet Weather App",
      description:
        "A small weather application built as a learning project. Uses public weather APIs to show forecasts and alerts.",
      link: "https://github.com/ECS1PLE/Weather-App",
      haveLink: true,
    },
    {
      title: "Pet Shop App",
      description:
        "An e-commerce style demo for a pet shop. Built with React, TypeScript and Redux Toolkit; includes product listing and cart functionality.",
      link: "https://github.com/ECS1PLE/Weather-App",
      haveLink: true,
    },
    {
      title: "First Portfolio",
      description:
        "My first public portfolio site built to learn React and basic deployment workflows.",
      link: "https://github.com/ECS1PLE/Portfolio",
      haveLink: true,
    },
    {
      title: "Personal Task Manager",
      description:
        "A lightweight task manager app to keep track of personal to-dos. Built with React, TypeScript and Redux Toolkit.",
      haveLink: false,
    },
  ];

  return (
    <div className="flex mt-6 gap-[100px] relative w-full">
      <div className="flex flex-col gap-[20px] flex-shrink-0">
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
      <div className="flex-grow min-w-0">
        {about && (
          <div className="flex flex-col gap-[20px] w-full">
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
          <div className="flex flex-wrap gap-[12px] w-full">
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
        {projects && (
          <div className="w-full flex flex-col gap-4 max-h-[700px] overflow-y-scroll custom-scrollbar">
            {myProjects.map((item, index) => (
              <ProjectBlock
                key={index}
                title={item.title}
                description={item.description}
                link={item?.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
