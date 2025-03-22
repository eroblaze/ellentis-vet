import Body from "./Body";
import Sidebar from "./Sidebar";

export default async function Page({ params }: { params: Promise<{ week: string; class: string }> }) {
  return (
    <>
      <main className="grid md:mx-auto md:max-w-5xl md:grid-cols-[1fr_2fr] md:gap-[30px] md:pt-[16px]">
        <Sidebar />
        <Body />
      </main>
    </>
  );
}
