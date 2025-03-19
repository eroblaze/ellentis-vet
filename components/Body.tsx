import Link from "next/link";
import Progress from "./Progress";
import ProgressCircle from "./ProgressCircle";
import Curriculum from "./Curriculum";

export default function Body() {
  return (
    <main className="container flex flex-col items-center">
      <p className="mb-[20px] text-sm">
        Welcome Christopher Chris <i>(v/329/01)</i>
      </p>

      <p className="font-work-sans mb-[5px] text-xl font-bold lg:text-2xl">INTRODUCTION TO</p>
      <h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">WEB DEVELOPMENT</h1>

      <section className="mt-[50px] flex w-full flex-wrap justify-center gap-[30px]">
        <Progress title="Course Progress">
          <ProgressCircle bgColor="bg-green-300" num={20}>
            HTML
          </ProgressCircle>
          <ProgressCircle bgColor="bg-my-white-50" num={9}>
            CSS
          </ProgressCircle>
          <ProgressCircle bgColor="bg-my-white-50" num={100}>
            <span>JAVA</span>
            <span>SCRIPT</span>
          </ProgressCircle>
        </Progress>

        <Progress title="Assessment Progress">
          <ProgressCircle bgColor="bg-green-300" num={100}>
            DONE
          </ProgressCircle>
          <ProgressCircle bgColor="bg-my-white-50" num={9}>
            PENDING
          </ProgressCircle>
          <ProgressCircle bgColor="bg-my-white-50" num={100}>
            <span>OVER</span>
            <span>DUE</span>
          </ProgressCircle>
        </Progress>
      </section>

      <section className="mt-[50px] w-full text-center">
        <h2 className="font-work-sans mb-[16px] text-xl font-bold lg:text-2xl">THIS WEEK</h2>
        <div className="flex flex-wrap justify-center gap-[16px]">
          <p>Advanced CSS selectors</p>
          <Link href="#" className="flex items-center gap-[5px] text-blue-700">
            <span className="underline">Jump in</span>

            <svg
              className="fill-current"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.33317 8.00342L6.39984 7.03675L8.7665 4.67008H0.666504V3.33675H8.7665L6.39984 0.970085L7.33317 0.00341797L11.3332 4.00342L7.33317 8.00342Z"
                fill=""
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="mt-[50px] w-full text-center">
        <h2 className="font-work-sans mb-[16px] text-xl font-bold lg:text-2xl">CURRICULUM</h2>
        <section className="grid grid-cols-[auto_1fr] gap-[16px]">
          <div>
            <span className="bg-my-white-300 relative mt-[20px] block h-[80px] w-[2px] before:absolute before:h-[15px] before:w-[15px] before:translate-x-[-50%] before:rounded-full before:bg-green-500"></span>
          </div>
          <section>
            <Curriculum
              open
              week="ONE"
              title="Introduction to HTML"
              classOneTitle="HTML Foundations &amp; Structure"
              classTwoTitle="Multimedia, Forms &amp; Best Practices"
            />
            <Curriculum
              week="TWO"
              title="CSS Fundamentals & Basic Styling"
              classOneTitle="Introduction &amp; Basic Syntax"
              classTwoTitle="Selectors, Specificity &amp; Basic Properties"
            />
            <Curriculum
              week="THREE"
              title="Introduction to HTML"
              classOneTitle="HTML Foundations &amp; Structure"
              classTwoTitle="Multimedia, Forms &amp; Best Practices"
            />
            <Curriculum
              week="FOUR"
              title="Introduction to HTML"
              classOneTitle="HTML Foundations &amp; Structure"
              classTwoTitle="Multimedia, Forms &amp; Best Practices"
            />
          </section>
        </section>
      </section>
    </main>
  );
}
