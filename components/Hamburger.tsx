"use client";

import { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

let clicked = false;

export default function Hamburger({ ref: menuRef }: { ref: RefObject<HTMLElement | null> }) {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuTlRef = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    menuTlRef.current = gsap
      .timeline({ paused: true })
      .to(
        [hamburgerRef.current?.querySelector("div:first-child"), hamburgerRef.current?.querySelector("div:last-child")],
        {
          width: 10
        }
      )
      .to(hamburgerRef.current, { rotate: 45 })
      .to(
        [hamburgerRef.current?.querySelector("div:first-child"), hamburgerRef.current?.querySelector("div:last-child")],
        {
          height: 7,
          width: 2
        }
      );
  }, []);

  const handleMenuClicked = () => {
    switch (clicked) {
      case false:
        menuTlRef.current?.timeScale(8).play();
        if (menuRef.current) {
          menuRef.current.classList.remove("slide-out");
          menuRef.current.classList.add("slide-in");
        }
        clicked = true;
        break;
      default:
        menuTlRef.current?.reverse();
        if (menuRef.current) {
          menuRef.current.classList.remove("slide-in");
          menuRef.current.classList.add("slide-out");
        }
        clicked = false;
    }
  };

  return (
    <button
      className="z-[2] flex min-h-[auto] min-w-[auto] flex-col items-center md:hidden"
      onClick={handleMenuClicked}
      ref={hamburgerRef}>
      <div className="bg-my-white-300 h-[2px] w-[17px] rounded"></div>
      <div className="bg-my-white-300 mt-[4px] h-[2px] w-[23px] rounded"> </div>
      <div className="bg-my-white-300 mt-[4px] h-[2px] w-[17px] rounded"> </div>
    </button>
  );
}
