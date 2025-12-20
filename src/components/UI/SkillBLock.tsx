interface SkillBlockProps {
  icon: React.ReactNode | any;
  text: string;
  className?: string;
}

const SkillBlock = ({ icon, text, className = "" }: SkillBlockProps) => {
  return (
    <div
      className={`flex items-center flex-col w-[198px] h-[164px] bg-[#0d0d0d] -z-1 rounded-[20px] p-[16px] ${className}`}
    >
      {icon}
      <span className="text-white text-[24px] mt-auto">{text}</span>
    </div>
  );
};

export default SkillBlock;
