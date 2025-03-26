export default function Search() {
  return (
    <main className="container flex flex-col items-center">
      <h1 className="font-work-sans text-xl md:text-2xl">
        Showing results for <span className="font-bold">CSS Grid</span>
      </h1>
      <select name="courses" id="courses-select" className="appearance-none border-1 px-[10px] py-[5px]">
        <option value="all">All courses</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
      </select>
    </main>
  );
}
