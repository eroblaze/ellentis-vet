import Btn from "@/components/btn";

export default function Login() {
  return (
    <main className="container flex flex-col items-center gap-[20px]">
      <section className="flex">
        <svg
          className="mt-[10px]"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.4728 2C34.0251 2 34.4728 1.55228 34.4728 1C34.4728 0.447715 34.0251 0 33.4728 0V2ZM33.4728 0H11V2H33.4728V0ZM0 11V25H2V11H0ZM11 36H35.7923V34H11V36ZM0 25C0 31.0751 4.92487 36 11 36V34C6.02944 34 2 29.9706 2 25H0ZM11 0C4.92487 0 0 4.92487 0 11H2C2 6.02944 6.02944 2 11 2V0Z"
            fill="#BDBDBD"
          />
        </svg>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="username" className="font-bold">
            Vet ID
          </label>
          <input
            type="text"
            name=""
            id="username"
            className="bg-my-white-100 border-my-white-300 focus:border-my-white-100 flex w-[min(100%,330px)] items-center gap-[5px] rounded-md border-1 py-[5px] ps-[10px] pe-[10px] focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </section>
      <section className="flex">
        <svg
          className="mt-[10px]"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.4728 2C34.0251 2 34.4728 1.55228 34.4728 1C34.4728 0.447715 34.0251 0 33.4728 0V2ZM33.4728 0H11V2H33.4728V0ZM0 11V25H2V11H0ZM11 36H35.7923V34H11V36ZM0 25C0 31.0751 4.92487 36 11 36V34C6.02944 34 2 29.9706 2 25H0ZM11 0C4.92487 0 0 4.92487 0 11H2C2 6.02944 6.02944 2 11 2V0Z"
            fill="#BDBDBD"
          />
        </svg>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="text"
            name=""
            id="password"
            className="bg-my-white-100 border-my-white-300 focus:border-my-white-100 flex w-[min(100%,330px)] items-center gap-[5px] rounded-md border-1 py-[5px] ps-[10px] pe-[10px] focus:outline-2 focus:outline-blue-500"
          />
          <Btn className="mt-[15px]">
            <span>Login</span>
          </Btn>
        </div>
      </section>
    </main>
  );
}
