import { useEffect, useState } from "react";

const useNavHide = () => {
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        let prevTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            const scrollPos = window.pageYOffset;

            prevTimeout && clearTimeout(prevTimeout);

            if (scrollPos > 50) {
                setHideNav(true);

                prevTimeout = setTimeout(() => {
                    setHideNav(false);
                }, 1000);
            } else {
                setHideNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return hideNav;
};

export default useNavHide;
