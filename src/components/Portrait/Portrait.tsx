import Image from "next/image";
import AdamTuraj from "./adamturaj.jpg";

const Portrait = () => {
  return (
    <div className="hidden md:flex w-full justify-center items-center h-full">
      <Image
        src={AdamTuraj}
        priority={true}
        alt="My Linkedin profile picture"
        className="rounded-full w-96 h-96 object-cover"
      />
    </div>
  );
};

export default Portrait;
