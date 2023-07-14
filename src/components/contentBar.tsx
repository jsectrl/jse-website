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
      companyName: "Brown University",
      jobTitle: "Relevant Coursework:",
      jobDates: "",
      jobDescription:
        "Introduction to Object Oriented Programming; Software Engineering; Introduction to Computer Systems; Creating Web Applications",
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
      name: "Forest Fire Prediction Model",
      brief: "Academic Project",
      description:
        "Designed a prediction model based on daily weather data from 1980 to 2019. The program was written in Python and used a random forest regressor model to estimate forest fire probability on a given day and expected damage in acres.",
      programmingLanguages: "JavaScript",
    },
    {
      name: "PayUp Application",
      brief: "Personal Project - In Development",
      description:
        "Android application designed to list a person's recurring payments, such as mortgages, auto loan payments, subscriptions, etc. The app sends notifications to the user for imminent and past due payments.",
      programmingLanguages: "Java",
    },
  ];
  var projects = (
    <>
      {projectData.map((project) => (
        <ProjectContainer
          projectName={project.name}
          projectBrief={project.brief}
          projectDescription={project.description}
          key={project.name}
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

function Footer() {
  const footer = (
    <>
      <div className="p-2 text-green-200">
        <p>
          Built with Next.js and Tailwind CSS, deployed in AWS. Inspired by
          Brittany Chiang's design.{" "}
        </p>
      </div>
    </>
  );
  return (
    <>
      <div>{footer}</div>
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
        <Footer />
      </div>
    </>
  );
}
