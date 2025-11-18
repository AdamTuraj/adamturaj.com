export const runtime = 'edge';

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

export const getServerSideProps = async () => {
  const docs = await getDocs(collection(firebase, "projects"));

  const projects: ProjectType[] = [];
  docs.forEach((doc) => {
    projects.push(doc.data() as ProjectType);
  });

  return {
    props: {
      projects,
    },
  };
};

export default Home;
