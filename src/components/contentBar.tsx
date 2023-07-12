import ContentSection from "./containers/contentSection";
import { FaJs, FaJava, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import JobContainer from "./containers/jobContainer";

import Projects from "./projects";
import { HexagonIcon } from "./containers/hexagonIcon";

function About() {
  const description = (
    <p>
      Hello! My name is Jose, and I am a college student studying Computer
      Science and Visual Arts. I spend most of my time designing web
      applications, and learning to use different technologies. Most recently, I
      began playing with Android Studio and making interesting applications.
      <br></br>
      Outside of my studies, I enjoy storytelling in various forms, such as
      reading books and watching TV/Movies.
    </p>
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
  var skillIcons = (
    <>
      <div className="flex justify-evenly flex-wrap">
        <HexagonIcon icon={<FaJs size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaJava size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaReact size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaNodeJs size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaPython size={30} />} activeLink={false} link="" />
      </div>
    </>
  );
  return (
    <>
      <ContentSection title="Skills">{skillIcons}</ContentSection>
    </>
  );
}

export default function Content() {
  return (
    <>
      <div className="h-full w-full sm:w-1/2 sm:py-28">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
