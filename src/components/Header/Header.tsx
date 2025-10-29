import Title from "../Title";
import Portrait from "../Portrait";

const Header = () => {
    return (
        <>
            <header
                id="header"
                className="flex h-screen w-screen flex-row items-center justify-center gap-8 portrait:h-[50vh] portrait:pt-32"
            >
                <div className="text-center sm:text-left">
                    <Title />
                    <button className="border-primary hover:animate-expand mt-4 rounded-lg border-2 px-4 py-2 text-3xl font-semibold transition-transform duration-200 hover:rotate-[0.5deg]">
                        <a href="/resume.pdf">View my Résumé</a>
                    </button>
                </div>
                <Portrait />
            </header>
        </>
    );
};

export default Header;
