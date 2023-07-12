import { FaGithub, FaTumblr } from "react-icons/fa";
import { HexagonLink } from "./containers/hexagonIcon";

export default function NavLinks() {
  return (
    <>
      <div className="flex justify-evenly h-12">
        <HexagonLink
          icon={<FaTumblr size={20} />}
          activeLink={true}
          link="https://github.com/jsectrl"
        />
        <HexagonLink
          icon={<FaGithub size={20} />}
          activeLink={true}
          link="https://jsectrl.tumblr.com/"
        />
      </div>
    </>
  );
}
