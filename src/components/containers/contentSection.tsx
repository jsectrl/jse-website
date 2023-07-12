import { ReactElement } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactElement;
}

export default function ContentSection(props: ContentSectionProps) {
  return (
    <>
      <section className="my-4">
        <h2 className="text-lg font-bold text-yellow">{props.title}</h2>
        {props.children}
      </section>
    </>
  );
}
