import Link from "next/link";
import Progress from "./Progress";
import ProgressCircle from "./ProgressCircle";
import Btn from "./btn";
import FullCurriculum from "./FullCurriculum";

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
        <FullCurriculum />
        <Btn className="mx-auto mt-[30px] md:ml-[16px]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9.00342L2.25 5.25342L3.3 4.16592L5.25 6.11592V0.00341797H6.75V6.11592L8.7 4.16592L9.75 5.25342L6 9.00342ZM1.5 12.0034C1.0875 12.0034 0.734375 11.8565 0.440625 11.5628C0.146875 11.269 0 10.9159 0 10.5034V8.25342H1.5V10.5034H10.5V8.25342H12V10.5034C12 10.9159 11.8531 11.269 11.5594 11.5628C11.2656 11.8565 10.9125 12.0034 10.5 12.0034H1.5Z"
              fill="white"
            />
          </svg>
          <span>Download</span>
        </Btn>
      </section>
    </main>
  );
}
