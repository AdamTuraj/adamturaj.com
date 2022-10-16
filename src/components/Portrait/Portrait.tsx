import Image from "next/future/image";

import SVGPortrait from "./adamturaj.svg";

const Portrait = () => {
  return (
    <div className="hidden h-full items-center md:flex">
      <Image
        src={SVGPortrait}
        priority={true}
        alt="A hand drawn version of me."
        className="max-w-[90%]"
      />
    </div>
  );
};

export default Portrait;
