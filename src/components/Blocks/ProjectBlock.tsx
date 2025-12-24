import Link from "next/link";
import Description from "../Text/Description";
import Text from "../Text/Text";

interface ProjectBlockInterface {
  title: string;
  description: string;
  link: string;
}

const ProjectBlock: React.FC<ProjectBlockInterface> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-[#0d0d0d] p-4 rounded-[16px]">
      <Text>{title}</Text>
      <Description>{description}</Description>
      <div className="flex">
        <p>Link:</p>
        <Link href={link}>{link}</Link>
      </div>
    </div>
  );
};

export default ProjectBlock;
