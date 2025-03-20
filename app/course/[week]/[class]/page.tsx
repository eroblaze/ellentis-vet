import Body from "./Body";
import Sidebar from "./Sidebar";

export default async function Page({ params }: { params: Promise<{ week: string; class: string }> }) {
  return (
    <>
      <main>
        <Sidebar />
        <Body />
      </main>
    </>
  );
}
