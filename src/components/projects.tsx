export default function Projects() {
  const projectsInfo = [
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
  return (
    <>
      <section className="content-item">
        <h2 className="content-section-title">Projects</h2>
        {projectsInfo.map((project) => (
          <div key={project.projectName}>
            <h3>{project.projectName}</h3>
            <h4>Description: </h4>
            <p>{project.description}</p>
            <h4>Technologies used:</h4>
            <p>{project.programmingLanguages}</p>
          </div>
        ))}
      </section>
    </>
  );
}
