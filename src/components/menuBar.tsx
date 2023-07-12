import NavMenu from "./navMenu";
import NamePane from "./namePane";
import NavLinks from "./navLinks";

export default function Menu() {
  return (
    <>
      <div className="w-full sm:h-screen sm:w-1/2 sm:sticky sm:top-0 sm:py-28 flex flex-col">
        <NamePane />
        <NavMenu />
        <NavLinks />
      </div>
    </>
  );
}
