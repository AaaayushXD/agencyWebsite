import { useState } from "react";
import LOGO from "../assets/logo.png";
import { AlignRight } from "lucide-react";

export const Navbar = () => {
  const [menuClicked, setMenuclicked] = useState(false);

  const onButtonClicked = () => {
    setMenuclicked((prev) => !prev);
  };
  return (
    <>
      {/* Destop View */}
      <div className="hidden max-w-[100vw] overflow-hidden min-h-[80px] bg-[#0a1128] text-[#919191] md:flex justify-center items-center ">
        <div className="max-w-[1200px] w-[1000px]  h-full flex justify-around items-center">
          <div className="max-h-[80px]">
            <img src={LOGO} alt="myLogo" loading="lazy" className="h-[60px]" />
          </div>
          <div className="h-full">
            <ul className="flex items-center gap-10 justify-evenly">
              <li className="hover:underline hover:text-[#adadad]">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline hover:text-[#adadad]">
                <a href="#">About</a>
              </li>
              <li className="hover:underline hover:text-[#adadad]">
                <a href="#">Services</a>
              </li>
              <li className="hover:underline hover:text-[#adadad]">
                <a href="#">Blog</a>
              </li>
              <li className="hover:underline hover:text-[#adadad]">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex w-full h-[80px] justify-between px-3 md:hidden items-center bg-[#0a1128] relative">
        <div>
          <img
            src={LOGO}
            className="h-[60px]"
            loading="lazy"
            alt="logo mobile"
          />
        </div>
        <div
          className="h-[80px] cursor-pointer flex items-center text-[#adadad]"
          onClick={onButtonClicked}
        >
          <AlignRight size={40} />
        </div>
      </div>
      {menuClicked && (
        <div className="w-full h-full py-5 transition-all duration-500 ease-in-out bg-[#0505058a] md:hidden">
          <ul className="flex flex-col items-center gap-10 text-xl font-bold text-[#222222] justify-evenly">
            <li className="hover:underline hover:text-[#adadad]">
              <a href="#">Home</a>
            </li>
            <li className="hover:underline hover:text-[#adadad]">
              <a href="#">About</a>
            </li>
            <li className="hover:underline hover:text-[#adadad]">
              <a href="#">Services</a>
            </li>
            <li className="hover:underline hover:text-[#adadad]">
              <a href="#">Blog</a>
            </li>
            <li className="hover:underline hover:text-[#adadad]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
