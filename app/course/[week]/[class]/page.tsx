export default async function Page({ params }: { params: Promise<{ week: string; class: string }> }) {
  const { week, class: req_class } = await params;
  console.log(week, req_class);
  return (
    <>
      <h1>hey</h1>
    </>
  );
}
