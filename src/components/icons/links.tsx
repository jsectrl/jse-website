import { FaGithub, FaTumblr, FaLinkedin } from "react-icons/fa";
import { HexagonLink } from "../containers/hexagonIcon";

export default function Links() {
  return (
    <>
      <div className="flex justify-evenly h-12">
        <HexagonLink
          icon={<FaTumblr size={20} />}
          activeLink={true}
          link="https://jsectrl.tumblr.com/"
        />
        <HexagonLink
          icon={<FaGithub size={20} />}
          activeLink={true}
          link="https://github.com/jsectrl"
        />
        <HexagonLink
          icon={<FaLinkedin size={20} />}
          activeLink={true}
          link="linkedin.com/in/jose-garcia-04bbb3172"
        />
      </div>
    </>
  );
}
