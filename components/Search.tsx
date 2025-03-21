interface SearchInterface {
  className?: string;
}

export default function Search({ className }: SearchInterface) {
  return (
    <div
      className={`bg-my-white-100 border-my-white-300 has-focus:border-my-white-100 flex w-[min(100%,330px)] items-center gap-[5px] rounded-md border-1 ps-[10px] has-focus:outline-2 has-focus:outline-blue-500 ${className}`}>
      <svg
        className="text-my-white-950"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.2 14.25L8.475 9.525C8.1 9.825 7.66875 10.0625 7.18125 10.2375C6.69375 10.4125 6.175 10.5 5.625 10.5C4.2625 10.5 3.10938 10.0281 2.16563 9.08438C1.22188 8.14062 0.75 6.9875 0.75 5.625C0.75 4.2625 1.22188 3.10938 2.16563 2.16563C3.10938 1.22188 4.2625 0.75 5.625 0.75C6.9875 0.75 8.14062 1.22188 9.08438 2.16563C10.0281 3.10938 10.5 4.2625 10.5 5.625C10.5 6.175 10.4125 6.69375 10.2375 7.18125C10.0625 7.66875 9.825 8.1 9.525 8.475L14.25 13.2L13.2 14.25ZM5.625 9C6.5625 9 7.35938 8.67188 8.01562 8.01562C8.67188 7.35938 9 6.5625 9 5.625C9 4.6875 8.67188 3.89062 8.01562 3.23438C7.35938 2.57812 6.5625 2.25 5.625 2.25C4.6875 2.25 3.89062 2.57812 3.23438 3.23438C2.57812 3.89062 2.25 4.6875 2.25 5.625C2.25 6.5625 2.57812 7.35938 3.23438 8.01562C3.89062 8.67188 4.6875 9 5.625 9Z"
          fill="#292929"
        />
      </svg>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="h-full w-full py-[5px] pe-[10px] outline-none"
      />
    </div>
  );
}
