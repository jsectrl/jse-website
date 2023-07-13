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
      <div className="hidden md:flex md:flex-col md:flex-grow md:justify-center">
        {menu}
      </div>
    </>
  );
}

export default function Menu() {
  return (
    <>
      <div className="flex flex-col p-4 lg:w-1/2 lg:h-screen xl:p-28 lg:p-24 md:w-1/2 md:h-screen md:p-20 md:sticky md:top-0">
        <Logo />
        <Navigation />
        <Links />
      </div>
    </>
  );
}
