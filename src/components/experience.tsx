export default function Experience() {
  const jobExperience = [
    {
      company: "Pear",
      title: "Associate Sloth Research Assistant",
      dates: "Jan 2020 - Jan 2021",
      description: "Pretty self explanatory",
    },
  ];
  return (
    <>
      <section className="content-item">
        <h2 className="content-section-title">Experience</h2>
        {jobExperience.map((job) => (
          <div key={job.company}>
            <div>
              <p>{job.dates}</p>
            </div>
            <div>
              <h3>{job.company}</h3>
              <h3>{job.title}</h3>
              <h4>Duties: </h4>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
