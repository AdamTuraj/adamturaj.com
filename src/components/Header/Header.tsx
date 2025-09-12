import Title from "../Title";
import Portrait from "../Portrait";

const Header = () => {
  return (
    <>
      <header className="flex h-screen w-screen flex-row" id="header">
        <div className="my-auto md:pl-18">
          <Title />
          {/* Didn't feel like fixing the styling when switching from button to link */}
          <button className="mt-4 border-2 border-primary rounded-lg text-3xl font-semibold px-4 py-2 hover:animate-expand hover:rotate-[0.5deg] transition-transform duration-200">
            <a href="/resume.pdf">View my Résumé</a>
          </button>
        </div>
        <Portrait />
      </header>
    </>
  );
};

export default Header;
