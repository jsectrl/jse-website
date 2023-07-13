import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface MenuItemProps {
  item: string;
}

export default function MenuItem(props: MenuItemProps) {
  const itemRef = "#" + props.item.toLowerCase();
  return (
    <>
      <div className="flex items-center group">
        <div className="w-8 h-0 mr-4 border border-green-100 group-hover:w-16 group-hover:duration-150"></div>
        <a href={itemRef} className={bebas.className}>
          {props.item}
        </a>
      </div>
    </>
  );
}
