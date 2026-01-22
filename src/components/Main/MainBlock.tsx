import { GithubIcon } from "lucide-react";
import Description from "../Text/Description";
import Span from "../Text/Span";
import SubTitle from "../Text/SubTitile";
import Text from "../Text/Text";
import Social from "../UI/Social";
import { BsTelegram } from "react-icons/bs";
import Result from "../UI/Result";

const MainBlock = () => {
  const Socials = [
    {
      href: "https://github.com/ECS1PLE",
      icon: GithubIcon,
    },
    {
      href: "https://t.me/ecs1ple",
      icon: BsTelegram,
    },
  ];

  const Results = [
    {
      count: 2,
      title: "Years of experince",
    },
    {
      count: 19,
      title: "Projects completed",
    },
    {
      count: 14,
      title: "Technologies mastered",
    },
    {
      count: "13,000",
      title: "Users in total",
    },
  ];
  return (
    <div className="flex flex-col sm:w-[100%]">
      <div className="flex flex-col text-center sm:text-left pt-8 gap-6 mt-6 w-[100%] sm:w-[60%]">
        <SubTitle>Frontend Developer</SubTitle>
        <div className="flex flex-col gap-0">
          <Text className="text-[40px] sm:text-[80px]">Hello, I am</Text>
          <Span
            className="text-[40px] mx-auto sm:mx-0 sm:text-[80px] leading-[80px] h-[80px]"
            enabled={true}
            speed={100}
            pause={1000}
          >
            Artyom Vavilov
          </Span>
        </div>
        <Description>
          I`m a pro at building web sites, web apps to telgram and create bots
          to telegram, create design.
        </Description>
        <div className="flex mx-auto sm:mx-0 gap-6 mt-6">
          {Socials.map((item, index) => (
            <Social key={index} href={item.href} icon={item.icon}></Social>
          ))}
        </div>
      </div>
      <div className="mt-10 sm:mt-20 flex gap-[8px] sm:gap-0 justify-between flex-col sm:flex-row sm:w-[100%] flex-wrap mx-auto sm:mx-0">
        {Results.map((item, index) => (
          <Result key={index} count={item.count} title={item.title}></Result>
        ))}
      </div>
    </div>
  );
};

export default MainBlock;
