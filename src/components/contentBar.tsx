import ContentSection from "./containers/contentSection";
import JobContainer from "./containers/jobContainer";
import ProjectContainer from "./containers/projectContainer";
import Technologies from "./icons/technologies";

function About() {
  const description = (
    <>
      <div className="p-2">
        <p>
          Hello! My name is Jose, and I am a college student studying Computer
          Science and Visual Arts. I spend most of my time designing web
          applications, and learning to use different technologies. Most
          recently, I began playing with Android Studio and making interesting
          applications.
        </p>
        <br />
        <p>
          Outside of my studies, I enjoy storytelling in various forms, such as
          reading books and watching TV/Movies.
        </p>
      </div>
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
      projectName: "Forest Fire Prediction Model",
      description:
        "Designed a prediction model based on daily weather data from 1980 to 2019. The program was written in Python and used a random forest regressor model to estimate forest fire probability on a given day and expected damage in acres.",
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
      <div className="flex flex-col lg:w-1/2 lg:py-20 md:w-1/2 md:py-16 lg:text-lg sm:text-md text-sm text-blue-200">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
