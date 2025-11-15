import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SocialInterface {
  href: string;
  icon: LucideIcon | IconType;
}

const Social: React.FC<SocialInterface> = ({ href, icon: Icon }) => {
  return (
    <Link href={href}>
      <div className="group w-9 h-9 border border-[#8783D1] flex items-center justify-center rounded-full hover:bg-[#8783D1] transtion duration-300 ease-in-out">
        <Icon className="w-4 h-4 text-[#8783D1] group-hover:text-white ease-in-out" />
      </div>
    </Link>
  );
};

export default Social;
