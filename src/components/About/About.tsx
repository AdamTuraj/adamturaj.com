import Image from "next/image";

import BottomWave from "./Waves/BottomWave";
import TopWave from "./Waves/TopWave";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import AboutPicture from "./AboutPicture.jpg";

const About = () => {
    return (
        <section id="about">
            <TopWave />
            <div className="w-screen bg-gradient-to-r from-green-600 to-green-800 pt-2">
                <div className="overflow-visible text-center md:px-20 md:text-left">
                    <h2 className="block text-6xl font-bold">About Me</h2>
                    <div className="flex gap-10">
                        <p className="mt-5 px-5 text-xl font-thin md:max-w-[1/2] lg:text-lg xl:text-2xl">
                            Hello! My name is Adam Turaj, and I am currently studying Mechatronics
                            Engineering at the University of Waterloo, Class of 2030.
                            <br />
                            <br />I have a strong passion for designing PCBs and developing
                            mechanical structures. At school, I am an active member of the hardware
                            and aerodynamics teams in{" "}
                            <a
                                href="https://www.uwfsae.ca/"
                                className="text-primary font-medium hover:text-green-500"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Formula Electric
                            </a>{" "}
                            racing team.
                            <br />
                            <br />
                            Outside of academics, I enjoy sim racing on Le Mans Ultimate and Assetto
                            Corsa Competizione, as well as attending real-world motorsport events
                            whenever I can.
                        </p>
                        <div className="hidden items-center transition-transform hover:scale-105 hover:rotate-1 sm:flex">
                            <a
                                href="https://www.thesimgrid.com/drivers/88431-_adamt/grid_feed"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src={AboutPicture}
                                    alt="Me standing in front of a GR86"
                                    className="rounded-3xl object-cover"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-row items-center justify-evenly">
                        <a
                            href="https://www.linkedin.com/in/adam-turaj/"
                            className="transition-colors hover:text-[#73ceff]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin size={64} />
                        </a>
                        <a
                            href="https://github.com/AdamTuraj"
                            className="transition-colors hover:text-[#979797]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub size={64} />
                        </a>
                        <a
                            href="https://discord.com/users/374147012599218176"
                            className="transition-colors hover:text-[#8f97f4]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaDiscord size={64} />
                        </a>
                    </div>
                </div>
            </div>
            <BottomWave />
        </section>
    );
};

export default About;
