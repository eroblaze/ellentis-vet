import Link from "next/link";

export default function Body() {
  return (
    <div className="lg-16:pr-0 max-md:p-[16px] md:pr-[16px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="font-work-sans text-xl font-medium">Week 1: Introduction to HTML</h2>
        <h1 className="font-work-sans text-2xl font-bold">Class 1: HTML Foundations &amp; Structure</h1>
      </div>

      <section className="mt-[20px] flex flex-col gap-[20px]">
        <div className="w-fit rounded-full bg-blue-50 px-[16px] py-[8px] text-sm font-bold text-blue-500 uppercase">
          🎯 LESSON OBJECTIVES
        </div>

        <div className="border-my-white-300 w-fit rounded-[20px] border-1 p-[20px]">
          <p className="mb-[5px]">By the end of this class, you should be able to:</p>
          <ul className="flex flex-col gap-[5px]">
            <li className="list-inside marker:content-['✅_']">Explain the role of HTML in web development.</li>
            <li className="list-inside marker:content-['✅_']">Understand the structure of an HTML document.</li>
            <li className="list-inside marker:content-['✅_']">Use essential head elements (meta, title, etc.).</li>
            <li className="list-inside marker:content-['✅_']">
              Implement core HTML elements like div, section, a, img.
            </li>
            <li className="list-inside marker:content-['✅_']">
              Apply semantic elements for accessibility and readability.
            </li>
            <li className="list-inside marker:content-['✅_']">Write clean, well-structured HTML code.</li>
          </ul>
        </div>
      </section>

      <section className="mt-[30px] flex flex-col gap-[20px]">
        <div className="w-fit rounded-full bg-blue-50 px-[16px] py-[8px] text-sm font-bold text-blue-500 uppercase">
          📖 Lesson Resources
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold">🔹 Reading Materials &amp; Guides</p>
            <ul className="flex list-inside flex-col gap-[5px] pl-[24px]">
              <Link href="#" className="hover:underline hover:underline-offset-8">
                <li className="marker:content-['📄_']">Introduction to HTML</li>
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-8">
                <li className="marker:content-['📄_']">HTML Document structure</li>
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-8">
                <li className="marker:content-['📄_']">Semantic vs Non-Semantic HTML</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold">🎥 Video Tutorials</p>
            <ul className="flex list-inside flex-col gap-[5px] pl-[24px]">
              <Link href="#" className="hover:underline hover:underline-offset-8">
                <li className="marker:content-['▶_']">HTML Basics - FreeCodeCamp</li>
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-8">
                <li className="marker:content-['▶_']">HTML Document structure explained</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-[30px] flex flex-col gap-[20px]">
        <div className="w-fit rounded-full bg-blue-50 px-[16px] py-[8px] text-sm font-bold text-blue-500 uppercase">
          📑 Assessment
        </div>

        <div className="flex flex-col gap-[5px]">
          <p className="font-bold">📌 Task:</p>
          <ul className="list-inside list-disc pl-[20px]">
            <li>
              Create an HTML page that contains:
              <ul className="list-inside list-[circle] pl-[20px]">
                <li>A header section with a site title</li>
                <li>A nav section with two links</li>
                <li>A section with a short bio paragraph</li>
                <li>An image with a proper alt description</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[20px] flex flex-col gap-[5px]">
        <p className="font-bold">💡 Submission Format:</p>
        <ul className="list-inside list-disc pl-[20px]">
          <li>Upload your .html file</li>
        </ul>
      </div>

      <input
        type="file"
        className="mt-[30px] w-[100%] file:mr-4 file:cursor-pointer file:rounded-md file:border-[2px] file:border-blue-300 file:bg-blue-500 file:px-[15px] file:py-[5px] file:text-white file:transition-all file:duration-150 file:hover:bg-blue-700 file:active:bg-blue-300"
      />
    </div>
  );
}
