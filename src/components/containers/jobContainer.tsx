interface JobContainerProps {
  companyName: string;
  jobTitle: string;
  jobDates: string;
  jobDescription: string;
}

export default function JobContainer(props: JobContainerProps) {
  return (
    <>
      <div className="group p-2 hover:!opacity-100 hover:bg-gray-100 rounded-lg duration-100">
        <h2 className="uppercase font-semibold group-hover:text-red-100">
          {props.companyName}
        </h2>
        <h3 className="group-hover:text-pink-100">{props.jobTitle}</h3>
        <h3>{props.jobDates}</h3>
        <p>{props.jobDescription}</p>
      </div>
    </>
  );
}
