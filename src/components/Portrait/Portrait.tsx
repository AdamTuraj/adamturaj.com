import Image from "next/image";
import AdamTuraj from "./adamturaj.png";

const Portrait = () => {
    return (
        <Image
            src={AdamTuraj}
            priority={true}
            alt="My Linkedin profile picture"
            className="hidden shrink-0 rounded-full object-cover object-top lg:block lg:h-64 lg:w-64 xl:h-80 xl:w-80"
        />
    );
};

export default Portrait;
