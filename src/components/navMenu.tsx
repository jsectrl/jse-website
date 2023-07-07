export default function NavMenu() {
  const options = ["About", "Experience", "Projects", "Contact"];
  return (
    <>
      <div className="py-4 sm:py-8">
        <ul>
          {options.map((menuItem) => (
            <li key={menuItem}>
              <a href="#">{menuItem}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
