import Title from "../Title";
import Portrait from "../Portrait";

const Header = () => {
    return (
        <header
            id="header"
            className="relative mx-auto flex h-[80vh] w-full max-w-7xl flex-col items-center justify-center px-6 md:h-screen lg:flex-row lg:gap-12 lg:px-16 xl:gap-16 md:portrait:h-[50vh]"
        >
            <div className="relative z-10 text-center lg:max-w-[60%] lg:text-left">
                <Title />
                <a
                    href="/resume.pdf"
                    className="border-primary hover:bg-primary/15 hover:animate-expand mt-4 inline-block rounded-lg border-2 px-5 py-2.5 text-xl font-semibold backdrop-blur-sm transition-all duration-200 hover:rotate-[0.5deg] md:mt-6 lg:mt-8 lg:px-6 lg:py-3 lg:text-2xl"
                >
                    View my Résumé
                </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Portrait />
            </div>
        </header>
    );
};

export default Header;
