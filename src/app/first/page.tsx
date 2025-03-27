import Link from "next/link";
import Footer from "../components/Footer";
import List from "../components/List";
import HeaderImage from "../components/Logo";

export default function First() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>First Page</h2>
        <HeaderImage />
        <List />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            key="Home"
            href="/home"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Home
          </Link>
          <Link
            key="Second"
            href="/second"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Second
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
