import Chart from "./Chart";
import BottomWave from "./Waves/BottomWave";
import TopWave from "./Waves/TopWave";

const About = () => {
  return (
    <section id="about">
      <TopWave />
      <div className="flex h-screen w-screen flex-row bg-gradient-to-r from-green-600 to-green-800 md:h-[50vh] md:pl-36 md:pr-12 xl:items-center">
        <div className="flex-[50%] text-center md:text-left">
          <h2 className="block pt-14 text-6xl font-bold">About Me</h2>
          <p className="mt-5 overflow-auto text-xl font-thin lg:text-lg xl:text-2xl">
            Hello! My name is Adam Turaj. I am a Canadian-based front-end
            freelancer. Between my high school studies and personal life, I
            spend lots of time programming for clients and open-source projects.
            <br />
            <br />I have worked with many different technologies and frameworks.
            My main focus is React and Next.js though I am a big fan of Python.
            I am also spending a lot of time learning new languages and
            frameworks.
          </p>
        </div>
        <Chart />
      </div>
      <BottomWave />
    </section>
  );
};

export default About;
