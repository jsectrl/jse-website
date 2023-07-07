import { FaGithub, FaTumblr } from "react-icons/fa";

function NavIcon({ icon }: { icon: any }) {
  return (
    <>
      <div className="relative flex h-12 w-12 bg bg-green-500 items-center justify-center">
        {icon}
      </div>
    </>
  );
}

export default function NavLinks() {
  return (
    <>
      <div className="flex justify-evenly">
        <NavIcon icon={<FaTumblr size="35" />} />
        <NavIcon icon={<FaGithub size="35" />} />
      </div>
    </>
  );
}
