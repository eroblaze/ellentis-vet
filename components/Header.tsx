"use client";

import { useRef } from "react";
import Search from "./Search";
import Btn from "./btn";
import Hamburger from "./Hamburger";

export default function () {
  const menuRef = useRef<HTMLElement | null>(null);

  return (
    <header className="sticky top-0 z-[2] h-full w-full bg-[hsla(0,0%,100%,0.8)] backdrop-filter-[saturate(180%)_blur(5px)]">
      <div className="z-[5] container flex w-full items-center justify-between">
        <div className="bg-my-white-200 z-[2] h-[31px] w-[31px] rounded-full"></div>
        <Hamburger ref={menuRef} />
        <nav
          ref={menuRef}
          className="max-md:bg-my-white-50 hidden w-full items-center max-md:fixed max-md:inset-0 max-md:min-h-screen max-md:flex-col max-md:gap-[30px] max-md:px-[16px] max-md:pt-[80px] md:flex md:justify-between">
          {/*<Search className="990px:w-[430px] md:max-830px:w-[min(100%,280px)] flex md:ml-[23%]" /> */}
          <Search className="justify-self-center md:w-[50%]" />
          <ul className="md:max-990px:gap-[10px] flex items-center gap-[16px] max-md:w-full max-md:flex-col">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Curriculum</a>
            </li>
            <li className="max-md:flex max-md:w-full max-md:justify-center">
              <Btn className="w-[min(100%,330px)]">Log out</Btn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
