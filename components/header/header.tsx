import React, { ReactNode } from "react";
import Link from "next/link";
import HeaderNavButton from "./HeaderNavButton";
import { ModeToggle } from "../mode-toggle";
import HeaderNavSearchBar from "./HeaderNavSearchBar";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between py-6 lg:px-9 px-6 border-b lg:h-[90px] h-[75px] relative">
      <div className="flex lg:gap-2 justify-center items-center">
        <ModeToggle />
        <h3 className="flex flex-col justify-center items-end after:w-0 hover:after:w-full after:transition-all after:duration-100 after:h-[1px] text-2xl font-bold after:content-[''] after:bg-foreground">
          <Link href={"/"} className="py-1 px-2">
            {children}
          </Link>
        </h3>
      </div>
      <nav className="flex flex-row justify-center items-center">
        <input type="checkbox" id="hamburgerInputBox" className="peer hidden" />
        <label
          aria-label="Hamburger Button"
          htmlFor="hamburgerInputBox"
          className="group w-9 h-10 cursor-pointer flex flex-col items-center justify-center lg:hidden  peer-checked:[&>div:nth-child(1)]:rotate-[-45deg] peer-checked:[&>div:nth-child(2)]:hidden peer-checked:[&>div:nth-child(3)]:rotate-[45deg]"
        >
          <div className="w-[50%] h-[2px] bg-foreground rounded-sm transition-all duration-100 origin-left translate-y-[0.45rem] signal:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-foreground rounded-md transition-all duration-100 origin-center signal:hidden"></div>
          <div className="w-[50%] h-[2px] bg-foreground rounded-md transition-all duration-100 origin-left -translate-y-[0.45rem] signal:rotate-[45deg]"></div>
        </label>
        <ul className="lg:flex lg:flex-row-reverse gap-3 lg:static fixed left-[100%] top-[75px] peer-checked:fixed peer-checked:left-0 transition-all duration-200 lg:z-auto z-10 w-full lg:h-min h-[calc(100vh-75px)] bg-background">
          <li className="flex items-center justify-center max-lg:py-3 ">
            <HeaderNavSearchBar placeHolder="Search" />
          </li>
          <li className="flex items-center justify-center max-lg:py-3 ">
            <HeaderNavButton href="">Home</HeaderNavButton>
          </li>
          <li className="flex items-center justify-center max-lg:py-3 ">
            <HeaderNavButton href="">About</HeaderNavButton>
          </li>
          <li className="flex items-center justify-center max-lg:py-3 ">
            <HeaderNavButton href="">Contact</HeaderNavButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
