import About from "./about";
import Experience from "./experience";
import Projects from "./projects";

export default function Content() {
  return (
    <>
      <div className="h-full w-full sm:w-1/2 border-2 border-green-500">
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
