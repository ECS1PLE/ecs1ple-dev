"use client";

import Button from "@/src/components/UI/Button";
import { useState } from "react";

const Resume = () => {
  const Buttons = [
    {
      text: "About me",
    },
    {
      text: "Skills",
    },
    {
      text: "My Projects",
    },
  ];
  const [about, setIsAbout] = useState(false);
  const [skills, setIsSkills] = useState(false);
  const [projects, setIsProjects] = useState(false);

  return (
    <div className="flex mt-6">
      <div className="flex flex-col gap-[20px]">
        {Buttons.map((item, idx) => (
          <Button
            backgroundColor="#8783D1"
            className="w-[150px] h-[36px]"
            key={idx}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Resume;
