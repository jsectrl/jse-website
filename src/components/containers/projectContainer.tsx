interface ProjectContainerProps {
  projectName: string;
  projectBrief: string;
  projectDescription: string;
}

export default function ProjectContainer(props: ProjectContainerProps) {
  return (
    <>
      <div className="group p-2">
        <h2 className="uppercase font-semibold text-green-100">
          {props.projectName}
        </h2>
        <h3>{props.projectBrief}</h3>
        <p className="group-hover:">{props.projectDescription}</p>
      </div>
    </>
  );
}
