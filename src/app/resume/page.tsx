"use client";

import Button from "@/src/components/UI/Button";
import { useState } from "react";

const Resume = () => {
  const Buttons = [
    {
      text: "About me",
      onClick: () => {
        setIsAbout((prev) => !prev);
        setIsSkills(false);
        setIsProjects(false);
      },
    },
    {
      text: "Skills",
      onClick: () => {
        setIsSkills((prev) => !prev);
        setIsAbout(false);
        setIsProjects(false);
      },
    },
    {
      text: "My Projects",
      onClick: () => {
        setIsProjects((prev) => !prev);
        setIsAbout(false);
        setIsSkills(false);
      },
    },
  ];
  const [about, setIsAbout] = useState(false);
  const [skills, setIsSkills] = useState(false);
  const [projects, setIsProjects] = useState(false);

  return (
    <div className="flex mt-6 md:gap-[200px]">
      <div className="flex flex-col gap-[20px]">
        {Buttons.map((item, idx) => (
          <Button
            backgroundColor="#8783D1"
            className="w-[150px] h-[36px]"
            key={idx}
            onClick={item.onClick}
          >
            {item.text}
          </Button>
        ))}
      </div>
      <div className="flex">
        {about && <div>123</div>}
        {skills && <div>456</div>}
        {projects && <div>789</div>}
      </div>
    </div>
  );
};

export default Resume;
