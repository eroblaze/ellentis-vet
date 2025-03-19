import Link from "next/link";

interface CurriculumInterface {
  open?: boolean;
}

export default function Curriculum({ open = false }: CurriculumInterface) {
  return (
    <div className="text-left">
      <details className="border-my-white-300 rounded-xl border-2 p-[16px]">
        <summary className="flex list-none items-center justify-between">
          <span>
            <b>WEEK ONE :</b> Introduction to HTML
          </span>
          <svg
            className="rotate-[-90deg] transition-[150ms_transform]"
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
        </summary>
        <nav className="bg-my-white-100 border-my-white-300 mt-[16px] rounded-b-xl border-2">
          <ul className="flex flex-col">
            <Link href="#" className="group border-my-white-300 border-b-2 p-[16px]">
              <li>
                <b>Class 1 :</b> <span className="group-hover:underline">HTML Foundations &amp; Structure </span>
              </li>
            </Link>
            <Link href="#" className="group p-[16px]">
              <li>
                <b>Class 2 :</b> <span className="group-hover:underline">Multimedia, Forms &amp; Best Practices</span>
              </li>
            </Link>
          </ul>
        </nav>
      </details>
    </div>
  );
}
