import Image from "next/image";
import AdamTuraj from "./adamturaj.jpg";

const Portrait = () => {
    return (
        <Image
            src={AdamTuraj}
            priority={true}
            alt="My Linkedin profile picture"
            className="hidden h-96 w-96 rounded-full object-cover sm:block portrait:h-72 portrait:w-72"
        />
    );
};

export default Portrait;
