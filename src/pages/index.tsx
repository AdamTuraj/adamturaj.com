import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
import About from "../components/About";
import PrevWork from "../components/PrevWork";

import { WakatimeContext } from "../utils/context";
import { firebase } from "../utils/firebase";

import Wakatimedata from "../types/WakatimeData";
import ProjectType from "../types/Project";
import Contact from "../components/Contact";
import SkipLink from "../components/SkipLink";

const Home = ({
  languageData,
  projects,
}: {
  languageData: Wakatimedata[];
  projects: ProjectType[];
}) => {
  return (
    <WakatimeContext.Provider value={languageData}>
      <SkipLink />
      <Header />
      <About />
      <PrevWork projects={projects} />
      <Contact />
    </WakatimeContext.Provider>
  );
};

export const getStaticProps = async () => {
  // Projects
  const docs = await getDocs(collection(firebase, "projects"));

  const projects: ProjectType[] = [];

  docs.forEach((doc) => {
    projects.push(doc.data() as ProjectType);
  });

  // Wakatime
  if (!process.env.WAKATIME_URL) {
    return {
      props: {},
    };
  }

  const data = await fetch(process.env.WAKATIME_URL);

  const languages = (await data.json()).data.languages;

  return {
    props: {
      projects,
      languageData: languages,
    },
    revalidate: 60 * 60,
  };
};

export default Home;
