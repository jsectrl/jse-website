interface JobContainerProps {
  companyName: string;
  jobTitle: string;
  jobDates: string;
  jobDescription: string;
}

export default function JobContainer(props: JobContainerProps) {
  return (
    <>
      <div className="hover:!opacity-100 hover:bg-gray-100">
        <h2>{props.companyName}</h2>
        <h3>{props.jobTitle}</h3>
        <h3>{props.jobDates}</h3>
        <h4>Duties: </h4>
        <p>{props.jobDescription}</p>
      </div>
    </>
  );
}
