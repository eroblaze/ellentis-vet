import { RefObject } from "react";
import Curriculum from "./Curriculum";

interface FullCurriculumInterface {
  className?: string;
  ref?: RefObject<HTMLElement | null>;
}

export default function FullCurriculum({ className, ref: currRef }: FullCurriculumInterface) {
  return (
    <>
      <section ref={currRef} className={`${className}`}>
        <div className="mb-[20px] grid grid-cols-[auto_1fr] gap-[16px]">
          <div>
            <span className="bg-my-white-300 relative mt-[20px] block h-[calc(100%+20px)] w-[2px] before:absolute before:h-[15px] before:w-[15px] before:translate-x-[-50%] before:rounded-full before:bg-green-500 after:absolute after:inset-0 after:h-[50%] after:bg-green-500"></span>
          </div>
          <Curriculum
            open
            week="ONE"
            title="Introduction to HTML"
            classOneTitle="HTML Foundations &amp; Structure"
            classTwoTitle="Multimedia, Forms &amp; Best Practices"
          />
        </div>

        <div className="mb-[20px] grid grid-cols-[auto_1fr] gap-[16px]">
          <div>
            <span className="bg-my-white-300 before:bg-my-white-300 after:bg-my-white-300 relative mt-[20px] block h-[calc(100%+20px)] w-[2px] before:absolute before:h-[15px] before:w-[15px] before:translate-x-[-50%] before:rounded-full after:absolute after:inset-0 after:h-[50%]"></span>
          </div>
          <Curriculum
            week="TWO"
            title="CSS Fundamentals & Basic Styling"
            classOneTitle="Introduction &amp; Basic Syntax"
            classTwoTitle="Selectors, Specificity &amp; Basic Properties"
          />
        </div>
        <div className="mb-[20px] grid grid-cols-[auto_1fr] gap-[16px]">
          <div>
            <span className="bg-my-white-300 before:bg-my-white-300 after:bg-my-white-300 relative mt-[20px] block h-[calc(100%+20px)] w-[2px] before:absolute before:h-[15px] before:w-[15px] before:translate-x-[-50%] before:rounded-full after:absolute after:inset-0 after:h-[50%]"></span>
          </div>
          <Curriculum
            week="THREE"
            title="Introduction to HTML"
            classOneTitle="HTML Foundations &amp; Structure"
            classTwoTitle="Multimedia, Forms &amp; Best Practices"
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-[16px]">
          <div>
            <span className="bg-my-white-300 before:bg-my-white-300 after:bg-my-white-300 relative mt-[20px] block h-0 w-[2px] before:absolute before:h-[15px] before:w-[15px] before:translate-x-[-50%] before:rounded-full after:absolute after:inset-0 after:h-[50%]"></span>
          </div>
          <Curriculum
            week="FOUR"
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam repudiandae quasi dolore molestias? Libero voluptatibus rerum odit at, sit nisi!"
            classOneTitle="HTML Foundations &amp; Structure"
            classTwoTitle="Multimedia, Forms &amp; Best Practices"
          />
        </div>
      </section>
    </>
  );
}
