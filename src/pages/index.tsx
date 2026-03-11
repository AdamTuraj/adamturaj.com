import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
import About from "../components/About";
import PrevWork from "../components/PrevWork";

import { firebase } from "../utils/firebase";

import ProjectType from "../types/Project";
import Contact from "../components/Contact";

const Home = ({ projects }: { projects: ProjectType[] }) => {
    return (
        <>
            <Header />
            <About />
            <PrevWork projects={projects} />
            <Contact />
        </>
    );
};

export const getStaticProps = async () => {
    // Projects
    const docs = await getDocs(collection(firebase, "projects"));

    const projects: ProjectType[] = [];

    docs.forEach((doc) => {
        const data = doc.data() as ProjectType;

        projects[data.order] = data;
    });

    return {
        props: {
            projects,
        },
        revalidate: 60 * 60,
    };
};

export default Home;
