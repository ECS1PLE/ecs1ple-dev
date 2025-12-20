interface SkillBlockProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const SkillBlock = ({ icon, text, className = "" }: SkillBlockProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SkillBlock;
