import Link from "next/link";

export default function SearchBox() {
  return (
    <div className="border-my-white-300 flex flex-col gap-[20px] rounded-[20px] border-1 p-[20px] md:rounded-[30px] md:p-[30px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-my-white-500">Week 3 - Layout & Positioning</p>
        <p className="text-xl font-bold">Introduction to HTML</p>
      </div>
      <p>Learn how to use CSS Flexbox for responsive layouts.</p>
      <div className="flex gap-[15px]">
        <p className="text-my-white-500 border-my-white-300 border-e-1 pe-[15px]">CSS Fundamentals</p>
        <p className="text-my-white-500">Video</p>
      </div>
      <Link href="#" className="flex items-center gap-[5px] text-blue-700">
        <span className="underline">View Resource</span>
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
  );
}
