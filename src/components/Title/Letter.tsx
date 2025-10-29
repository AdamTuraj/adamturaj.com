import { useEffect, useState } from "react";

const Letter = ({ children, greenText }: { children: string; greenText: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsHovered(false), 500);

        return () => clearTimeout(timeout);
    }, [isHovered]);

    return (
        <span
            className={`${
                isHovered ? "animate-spin" : ""
            } inline-block font-extrabold ${children === " " ? "ml-3" : ""} ${
                greenText ? "text-primary" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
        >
            {children}
        </span>
    );
};

export default Letter;
