function MenuItem(props: any) {
  return (
    <>
      <div className="group flex items-center">
        <div className="w-8 h-0 mr-4 border border-red-500 group-hover:w-16 group-hover:duration-150"></div>
        <a href="#" className="group-hover:">
          {props.item}
        </a>
      </div>
    </>
  );
}

export default function NavMenu() {
  const options = ["About", "Experience", "Projects", "Contact"];
  return (
    <>
      <div className="py-4 sm:py-8 flex flex-grow items-center">
        <ul className="text-yellow">
          {options.map((menuItem) => (
            <li key={menuItem}>
              <MenuItem item={menuItem} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
