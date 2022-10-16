import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-[10rem] font-bold leading-tight">404</h1>
        <h2 className="text-4xl">Guess what! There is nothing here.</h2>
        <div className="rounded-md border-4 border-primary py-3 text-xl transition-colors duration-300 hover:bg-green-500">
          <Link href="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
