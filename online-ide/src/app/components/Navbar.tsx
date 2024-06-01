import Image from "next/image";
import logo from "../images/bazinga-icon.png";
import { navigation } from "../constants/Nav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import menuIcon from "../images/menu-icon.png";
import closeIcon from "../images/close-icon.png";
import { HamburgerMenu } from "./design/Navbar";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const router = useRouter();

  const moveToLogin = (method: string) => {
    enablePageScroll();
    method === "#signin"
      ? router.push("Login?msg=login")
      : router.push("Login?msg=signup");
  };

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    !openNavigation ? disablePageScroll() : enablePageScroll();
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`${
        openNavigation ? "bg-blacktheme" : "bg-blacktheme backdrop-blur-sm"
      } fixed left-0 w-full top-0 z-50 border-b border-blacktheme lg:bg-blacktheme lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="flex items-center justify-center w-[12rem] xl:mr-8"
          href="#home"
        >
          <Image src={logo} alt="logo" className="size-11 ml-5" />
          <label className="text-white ml-2 text-xl font-mono font-bold cursor-pointer">
            Bazinga!
          </label>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-blacktheme/90 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => {
              return (
                <a
                  href={item.url}
                  onClick={() =>
                    item.onlyMobile ? moveToLogin(item.url) : handleClick()
                  }
                  key={index}
                  className={`${
                    item.onlyMobile ? "lg:hidden" : ""
                  } block relative font-mono font-extrabold 
                  text-2xl uppercase text-whitetheme transition-colors 
                  hover:text-slate-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm 
                  lg:leading-5 lg:hover:text-slate-400 xl:px-12`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <button
          onClick={() => moveToLogin("#signup")}
          className="hidden lg:block relative font-mono font-extrabold 
                  text-2xl uppercase text-whitetheme transition-colors 
                  hover:text-slate-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm 
                  lg:leading-5 lg:hover:text-slate-400 xl:px-12"
        >
          new account
        </button>
        <button
          className="hidden lg:flex uppercase font-mono font-extrabold text-whitetheme bg-middletheme rounded-2xl p-2"
          onClick={() => moveToLogin("#signin")}
        >
          Sign In
        </button>

        <button
          onClick={toggleNavigation}
          className="lg:hidden ml-auto font-mono text-4xl text-whitetheme px-4 -mt-1 pb-0 border-[2.5px] border-middletheme"
        >
          <Image
            src={openNavigation ? closeIcon : menuIcon}
            alt="icon"
            className="size-6 my-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
