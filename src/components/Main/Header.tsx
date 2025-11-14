import Button from "../UI/Button";
import Logo from "../UI/Logo";
import NavItem from "../UI/NavItem";
import Span from "../UI/Span";

const Header = () => {
  const NavItemsList = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Resume",
      href: "/resume",
    },
    {
      text: "Work",
      href: "/works",
    },
  ];
  return (
    <header className="py-8 xl:py-12 text-white flex w-[100%]">
      <div className="flex mx-auto justify-between items-center w-[100%]">
        <div className="flex">
          <Logo />
          <Span fontSize={28} className="mt-auto">
            .
          </Span>
        </div>
        <div className="flex gap-[24px] items-center">
          {NavItemsList.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text}></NavItem>
          ))}
          <Button backgroundColor="#8783D1">Hire me</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
