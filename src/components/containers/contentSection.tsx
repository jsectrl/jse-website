import { ReactElement } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactElement;
}

export default function ContentSection(props: ContentSectionProps) {
  const sectionId = props.title.toLowerCase();
  return (
    <>
      <section id={sectionId} className="mt-8 scroll-mt-28">
        {props.children}
      </section>
    </>
  );
}
