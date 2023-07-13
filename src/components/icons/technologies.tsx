import { HexagonIcon } from "../containers/hexagonIcon";
import { FaJs, FaJava, FaReact, FaNodeJs, FaPython } from "react-icons/fa";

function Frameworks() {
  return (
    <>
      <h2 className="uppercase font-semibold">Frameworks</h2>
      <div className="flex justify-evenly flex-wrap my">
        <HexagonIcon icon={<FaReact size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaNodeJs size={30} />} activeLink={false} link="" />
      </div>
    </>
  );
}

function Languages() {
  return (
    <>
      <h2 className="uppercase font-semibold">Programming Languages</h2>
      <div className="flex justify-evenly flex-wrap">
        <HexagonIcon icon={<FaJs size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaJava size={30} />} activeLink={false} link="" />
        <HexagonIcon icon={<FaPython size={30} />} activeLink={false} link="" />
      </div>
    </>
  );
}

export default function Technologies() {
  return (
    <>
      <div className="flex flex-col lg:space-y-4 md:space-y-2 space-y-2 p-2">
        <Languages />
        <Frameworks />
      </div>
    </>
  );
}
