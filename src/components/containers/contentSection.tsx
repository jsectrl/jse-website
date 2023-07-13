import { ReactElement } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactElement;
}

export default function ContentSection(props: ContentSectionProps) {
  const sectionId = props.title.toLowerCase();
  return (
    <>
      <section id={sectionId} className="lg:mt-8 mt-4 scroll-mt-24">
        {props.children}
      </section>
    </>
  );
}
