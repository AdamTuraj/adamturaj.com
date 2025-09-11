import Image from "next/image";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import ProjectType from "../../types/Project";

const ProjectTextbox = ({
  project,
  reversed,
}: {
  project: ProjectType;
  reversed: boolean;
}) => {
  const langString = project.languages.join(", ");
  return (
    <div className="relative min-w-[25%]">
      <div
        className={`top-1/2 z-10 flex flex-col rounded-md bg-white border px-10 py-5 text-black md:absolute md:-translate-y-1/2 md:rounded-lg ${
          reversed ? "-right-14" : "-left-14"
        }`}
      >
        <h4 className="text-sm text-green-500">Featured Project</h4>
        <h3 className="whitespace-pre-wrap text-2xl font-bold">
          {project.title}
        </h3>
        <p
          className="font-normal"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <br />
        <p className="font-thin">Skills demostrated: {langString}</p>
        <div className="mt-2 flex w-full justify-end gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Check out the projects Github"
            >
              <AiFillGithub
                size={28}
                className="transition-colors duration-500 hover:fill-primary"
              />
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Check out the projects website"
          >
            <BiLinkExternal
              size={28}
              className="transition-colors duration-500 hover:fill-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectImage = ({ project }: { project: ProjectType }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="hidden md:block"
      aria-label="Check out the projects website"
    >
      <Image
        src={project.imageUrl}
        alt={`Screenshot from ${project.title}'s homescreen`}
        width={690}
        height={1}
        className="rounded-md shadow-xl transition-transform duration-300 hover:scale-105"
      />
    </a>
  );
};

const Project = ({
  project,
  reversed,
}: {
  project: ProjectType;
  reversed: boolean;
}) => {
  return (
    <div className="flex w-full flex-row justify-center">
      {reversed ? (
        <>
          <ProjectTextbox project={project} reversed={true} />
          <ProjectImage project={project} />
        </>
      ) : (
        <>
          <ProjectImage project={project} />
          <ProjectTextbox project={project} reversed={false} />
        </>
      )}
    </div>
  );
};
const PrevWork = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <section className="mt-20 h-max w-screen px-5" id="projects">
      <h2 className="text-center text-5xl font-bold md:text-6xl">
        Somethings I have built
      </h2>
      <div className="mt-20 flex flex-col gap-5 md:gap-24">
        {projects ? (
          projects.map((project, i) => (
            <Project
              project={project}
              reversed={i % 2 === 1}
              key={project.title}
            />
          ))
        ) : (
          <p className="text-center text-2xl">
            There was an error fetching the projects.
          </p>
        )}
      </div>
    </section>
  );
};

export default PrevWork;
