import Body from "./Body";
import Sidebar from "./Sidebar";

export default async function Page({ params }: { params: Promise<{ week: string; class: string }> }) {
  return (
    <>
      <main className="grid md:mx-auto md:max-w-5xl md:grid-cols-[1.25fr_2fr] md:gap-[30px] md:pt-[24px]">
        <Sidebar />
        <Body />
      </main>
    </>
  );
}
