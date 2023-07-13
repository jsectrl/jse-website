interface ProjectContainerProps {
  projectName: string;
  projectDescription: string;
}

export default function ProjectContainer(props: ProjectContainerProps) {
  return (
    <>
      <div className="group mb-2">
        <h2 className="uppercase font-semibold">{props.projectName}</h2>
        <p className="group-hover:">{props.projectDescription}</p>
      </div>
    </>
  );
}
