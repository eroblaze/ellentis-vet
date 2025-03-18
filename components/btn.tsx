interface BtnInterface {
  children: React.ReactNode;
  handler?: () => {};
}

export default function Btn({ children }: BtnInterface) {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-[5px] rounded-md border-[2px] border-blue-300 bg-blue-500 px-[15px] py-[5px] text-white transition-all duration-150 hover:bg-blue-700">
      {children}
    </button>
  );
}
