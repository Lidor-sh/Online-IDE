import Image from "next/image";
import logo from "../images/bazinga-icon.png";

const Navbar = () => {
  return (
    <div className="flex w-screen h-20 items-center bg-blacktheme">
      <Image src={logo} alt="logo" className="size-11 ml-5" />
      <label className="text-white ml-2 text-xl font-mono font-bold">
        Bazinga!
      </label>
      <div className="flex flex-1 items-center justify-center space-x-12">
        <button className="flex text-white font-mono font-bold text-xl">
          Home
        </button>
        <button className="flex text-white font-mono font-bold text-xl">
          About
        </button>
        <button className="flex text-white font-mono font-bold text-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
