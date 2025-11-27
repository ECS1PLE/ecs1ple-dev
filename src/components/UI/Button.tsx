import Link from "next/link";

interface ButtonInterface {
  href?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  borderRadius?: number;
}

const Button: React.FC<ButtonInterface> = ({
  href = "/",
  backgroundColor,
  children,
  borderRadius = 0,
}) => {
  return (
    <Link href={href}>
      <button
        className="justify-center flex items-center text-[#1C1C22] rounded-[9999px] px-[14px] py-[6px]
        hover:cursor-pointer hover:text-white duration-300 ease-in-out"
        style={{ backgroundColor, borderRadius }}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
