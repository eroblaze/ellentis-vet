interface ProgressCircleInterface {
  bgColor: string;
  num: number;
  children: React.ReactNode;
}
export default function ProgressCircle({ children, num, bgColor }: ProgressCircleInterface) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className={`grid aspect-square place-content-center rounded-full p-[16px] text-2xl lg:text-3xl ${bgColor}`}>
        {num}%
      </div>
      <p className="flex flex-wrap justify-center text-center">{children}</p>
    </div>
  );
}
