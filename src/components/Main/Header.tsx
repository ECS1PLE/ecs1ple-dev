import Button from "../UI/Button";
import Logo from "../UI/Logo";
import NavItem from "../UI/NavItem";
import Span from "../Text/Span";

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
  ];
  return (
    <header className="py-8 xl:py-16 text-white flex w-[100%]">
      <div className="flex flex-col sm:flex-row mx-auto justify-between items-center w-[100%]">
        <div className="flex">
          <Logo />
          <Span fontSize={28} enabled={true}>
            .
          </Span>
        </div>
        <div className="flex gap-[24px] items-center">
          {NavItemsList.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text}></NavItem>
          ))}
          <Button backgroundColor="#8783D1" borderRadius={9999} href="/work">
            Hire me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
