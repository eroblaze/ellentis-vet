import Link from "next/link";
import Search from "./Search";
import Btn from "./btn";

export default function () {
  return (
    <header className="lg-16:px-0 mx-auto flex w-full max-w-5xl items-center justify-between p-[16px] outline-3">
      <div className="bg-my-white-300 h-[31px] w-[31px] rounded-full"></div>
      <div className="bg-my-white-300 h-[31px] w-[31px] rounded-full md:hidden"></div>
      <nav className="max-960px:gap-20 hidden w-full md:flex md:items-center md:justify-end md:gap-30">
        <Search className="hidden md:flex" />
        <ul className="flex items-center gap-[30px]">
          <li>
            <Link href="#">Curriculum</Link>
          </li>
          <li>
            <Btn>Log out</Btn>
          </li>
        </ul>
      </nav>
    </header>
  );
}
