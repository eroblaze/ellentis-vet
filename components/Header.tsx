"use client";

import { useRef } from "react";
import Link from "next/link";
import Search from "./Search";
import Btn from "./btn";
import Hamburger from "./Hamburger";

export default function () {
  const menuRef = useRef<HTMLElement | null>(null);

  return (
    <header className="lg-16:px-0 mx-auto flex w-full max-w-5xl items-center justify-between p-[16px]">
      <div className="bg-my-white-300 h-[31px] w-[31px] rounded-full"></div>
      <Hamburger ref={menuRef} />
      <nav
        ref={menuRef}
        className="bg-my-white-50 hidden w-full items-center max-md:fixed max-md:inset-0 max-md:min-h-screen max-md:flex-col max-md:gap-[30px] max-md:px-[16px] max-md:pt-[80px] md:flex md:justify-between">
        <Search className="900px:w-[430px] flex md:ml-[23%]" />
        <ul className="md:max-900px:gap-[10px] flex items-center gap-[16px] max-md:w-full max-md:flex-col">
          <li>
            <Link href="#">Curriculum</Link>
          </li>
          <li className="max-md:flex max-md:w-full max-md:justify-center">
            <Btn className="w-[min(100%,330px)]">Log out</Btn>
          </li>
        </ul>
      </nav>
    </header>
  );
}
