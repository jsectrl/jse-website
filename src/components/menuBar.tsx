import Logo from "./icons/logo";
import Links from "./icons/links";

import MenuItem from "./containers/menuItemContainer";

function Navigation() {
  const options = ["About", "Skills", "Experience", "Projects", "Contact"];
  var menu = (
    <>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <MenuItem item={option} />
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <>
      <div className="py-4 sm:py-8 sm:flex flex-grow items-center sm:visible hidden">
        {menu}
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <>
      <div className="w-full sm:h-screen sm:w-1/2 sm:sticky sm:top-0 sm:py-28 flex flex-col">
        <Logo />
        <Navigation />
        <Links />
      </div>
    </>
  );
}
