interface ProgressInterface {
  title: string;
  children: React.ReactNode;
}

export default function Progress({ title, children }: ProgressInterface) {
  return (
    <div className="font-work-sans bg-my-white-100 border-my-white-300 grid w-[min(100%,360px)] gap-[20px] rounded-3xl border-1 p-[16px]">
      <h2>{title}</h2>
      <section className="grid w-full grid-cols-3 gap-[16px]">{children}</section>
    </div>
  );
}
