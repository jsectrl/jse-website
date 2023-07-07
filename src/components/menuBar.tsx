import NavMenu from "./navMenu";
import NamePane from "./namePane";
import NavLinks from "./navLinks";

export default function Menu() {
  return (
    <>
      <div className="w-full sm:h-screen sm:w-1/2 border-2 sm:sticky sm:top-0 py-4 sm:py-12 border-blue-500">
        <NamePane />
        <NavMenu />
        <NavLinks />
      </div>
    </>
  );
}
