import Content from "../components/contentBar";
import Menu from "../components/menuBar";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row px-12 sm:px-28 text-white border-2 border-red-600 ">
        <Menu />
        <Content />
      </div>
    </>
  );
}
