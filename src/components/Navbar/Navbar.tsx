import useNavHide from "../../hooks/useNavHide";

const Link = ({ className, to, children }: { className: string; to: string; children: string }) => {
    const scrollTo = () => {
        const element = document.getElementById(to);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a onClick={scrollTo} role="link" className={className}>
            {children}
        </a>
    );
};
const Navbar = () => {
    const shouldHide = useNavHide();

    return (
        <nav
            className={`fixed inset-x-0 top-4 z-40 mx-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 px-8 py-3 text-gray-800 shadow-lg shadow-black/5 backdrop-blur-xl backdrop-saturate-150 md:mx-8 ${
                shouldHide ? "-translate-y-[calc(100%+2rem)]" : ""
            } transition-all duration-500`}
        >
            <Link to="header" className="text-xl font-bold md:text-2xl">
                Adam Turaj
            </Link>
            <div className="hidden gap-5 md:flex">
                <Link
                    to="about"
                    className="hover:text-primary text-sm font-medium transition-colors md:text-base"
                >
                    About
                </Link>
                <Link
                    to="projects"
                    className="hover:text-primary text-sm font-medium transition-colors md:text-base"
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    className="hover:text-primary text-sm font-medium transition-colors md:text-base"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
