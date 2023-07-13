import ContentSection from "./containers/contentSection";
import JobContainer from "./containers/jobContainer";
import ProjectContainer from "./containers/projectContainer";
import Technologies from "./icons/technologies";

function About() {
  const description = (
    <>
      <p>
        Hello! My name is Jose, and I am a college student studying Computer
        Science and Visual Arts. I spend most of my time designing web
        applications, and learning to use different technologies. Most recently,
        I began playing with Android Studio and making interesting applications.
      </p>
      <br />
      <p>
        Outside of my studies, I enjoy storytelling in various forms, such as
        reading books and watching TV/Movies.
      </p>
    </>
  );
  return (
    <>
      <ContentSection title="About">{description}</ContentSection>
    </>
  );
}

function Experience() {
  const jobExperience = [
    {
      companyName: "Pear",
      jobTitle: "Associate Sloth Research Assistant",
      jobDates: "Jan 2020 - Jan 2021",
      jobDescription: "Pretty self explanatory",
    },
  ];
  var jobs = (
    <>
      {jobExperience.map((job) => (
        <JobContainer
          companyName={job.companyName}
          jobTitle={job.jobTitle}
          jobDates={job.jobDates}
          jobDescription={job.jobDescription}
          key={job.jobTitle}
        />
      ))}
    </>
  );
  return (
    <>
      <ContentSection title="Experience">{jobs}</ContentSection>
    </>
  );
}

function Skills() {
  var skills = <></>;
  return (
    <>
      <ContentSection title="Skills">
        <Technologies />
      </ContentSection>
    </>
  );
}

function Projects() {
  const projectData = [
    {
      projectName: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate enim id elit auctor, eu ultricies augue vulputate. In consectetur augue orci, a lobortis mi vestibulum vitae. Etiam aliquet pellentesque sapien sed posuere. Quisque posuere neque ac nisi viverra, ac efficitur nisl ornare. Aliquam porta venenatis eros, ut dictum turpis pretium non. Mauris vitae turpis congue, porttitor neque vitae, sagittis nisl. Donec ut vestibulum lectus, et porttitor nunc",
      programmingLanguages: "JavaScript",
    },
    {
      projectName: "Project 2",
      description:
        "usce libero mi, lobortis vitae scelerisque vitae, molestie ac enim. Morbi ac leo sit amet ex gravida ornare ac at est. Nunc tristique pellentesque enim. In hac habitasse platea dictumst. Pellentesque congue cursus malesuada. Cras in posuere nisi.",
      programmingLanguages: "Java",
    },
    {
      projectName: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate enim id elit auctor, eu ultricies augue vulputate. In consectetur augue orci, a lobortis mi vestibulum vitae. Etiam aliquet pellentesque sapien sed posuere. Quisque posuere neque ac nisi viverra, ac efficitur nisl ornare. Aliquam porta venenatis eros, ut dictum turpis pretium non. Mauris vitae turpis congue, porttitor neque vitae, sagittis nisl. Donec ut vestibulum lectus, et porttitor nunc",
      programmingLanguages: "C++ and QT Creator",
    },
  ];
  var projects = (
    <>
      {projectData.map((project) => (
        <ProjectContainer
          projectName={project.projectName}
          projectDescription={project.description}
          key={project.projectName}
        />
      ))}
    </>
  );
  return (
    <>
      <ContentSection title="Projects">{projects}</ContentSection>
    </>
  );
}

export default function Content() {
  return (
    <>
      <div className="h-full w-full sm:w-1/2 sm:py-28 text-md">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
