import SearchBox from "@/components/SearchBox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Search() {
  return (
    <main className="container flex flex-col items-center gap-[30px]">
      <h1 className="font-work-sans text-xl md:text-2xl">
        Showing results for <span className="font-bold">CSS Grid</span>
      </h1>

      <div className="flex gap-[20px]">
        <Select>
          <SelectTrigger className="border-my-white-300">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent className="bg-my-white-50">
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="js">JavaScript</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-my-white-300">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent className="bg-my-white-50">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="articles">Articles</SelectItem>
            <SelectItem value="videos">Videos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-my-white-500">2 results</p>

      <div className="flex flex-wrap justify-center gap-[30px]">
        <SearchBox />
        <SearchBox />
      </div>
    </main>
  );
}
