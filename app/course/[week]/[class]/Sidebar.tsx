"use client";
import FullCurriculum from "@/components/FullCurriculum";
import { useRef } from "react";

export default function Sidebar() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  function handleMenuClicked() {
    if (menuRef.current) {
      menuRef.current.classList.toggle("sidebar_toggle");
    }
  }
  return (
    <>
      <aside className="md:border-my-white-300 bg-my-white-50 sticky top-[63px] min-h-[calc(100vh-63px)] md:rounded-xl md:border-2 md:p-[16px]">
        <div
          onClick={handleMenuClicked}
          className="border-my-white-300 flex items-center gap-[10px] border-b-1 p-[16px] md:hidden">
          <svg
            className="shrink-[0] grow-[0] rotate-[-90deg] transition-[150ms_transform]"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-current"
              d="M6.00005 7.475C5.86672 7.475 5.73772 7.45 5.61305 7.4C5.48772 7.35 5.38338 7.28334 5.30005 7.2L0.700048 2.6C0.516715 2.41667 0.425049 2.18334 0.425049 1.9C0.425049 1.61667 0.516715 1.38334 0.700048 1.2C0.883382 1.01667 1.11672 0.925003 1.40005 0.925003C1.68338 0.925003 1.91672 1.01667 2.10005 1.2L6.00005 5.1L9.90005 1.2C10.0834 1.01667 10.3167 0.925003 10.6 0.925003C10.8834 0.925003 11.1167 1.01667 11.3 1.2C11.4834 1.38334 11.575 1.61667 11.575 1.9C11.575 2.18334 11.4834 2.41667 11.3 2.6L6.70005 7.2C6.60005 7.3 6.49172 7.37067 6.37505 7.412C6.25838 7.454 6.13338 7.475 6.00005 7.475V7.475Z"
              fill="none"
            />
          </svg>
          <p>Menu</p>
        </div>
        <FullCurriculum ref={menuRef} className="max-md:hidden max-md:p-[16px]" />
      </aside>
    </>
  );
}
