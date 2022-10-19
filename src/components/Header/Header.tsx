import Title from "../Title";
import Portrait from "../Portrait";

const Header = () => {
  const scrollTo = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex h-screen w-screen flex-row" id="header">
        <div className="my-auto w-full md:flex-[50%] md:pl-36">
          <Title />
          <button
            onClick={scrollTo}
            className="relative mx-5 mt-10 w-full rounded-lg border-4 border-primary py-3 text-3xl font-extrabold before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:bg-primary before:transition-transform before:duration-300 before:ease-in-out before:hover:scale-100 md:mx-0 md:mt-4 md:w-fit md:px-20"
          >
            Contact me
          </button>
        </div>
        <Portrait />
      </header>
    </>
  );
};

export default Header;
