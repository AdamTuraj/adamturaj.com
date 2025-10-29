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
            className={`fixed top-0 z-40 flex max-h-10 w-screen flex-row items-center bg-white px-6 py-2 text-2xl text-black md:max-h-16 md:px-24 md:py-7 ${
                shouldHide ? "-translate-y-full" : ""
            } transition-transform duration-500`}
        >
            <Link to="header" className="min-w-max text-2xl font-extrabold md:text-4xl">
                Adam Turaj
            </Link>
            <div className="hidden w-full justify-end gap-5 md:flex">
                <Link to="about" className="hover:text-primary transition-colors">
                    About
                </Link>
                <Link to="projects" className="hover:text-primary transition-colors">
                    Projects
                </Link>
                <Link to="contact" className="hover:text-primary transition-colors">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
