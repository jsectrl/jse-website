import Content from "../components/contentBar";
import Menu from "../components/menuBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-4 xl:mx-24 lg:mx-20 sm:mx-12 md:flex-row text-white">
        <Menu />
        <Content />
      </div>
    </>
  );
}
