import { ReactNode } from "react";
import Hexagon from "react-hexagon";

interface HexagonIconProps {
  icon: ReactNode;
  activeLink: boolean;
  link: string;
}

export function HexagonLink(props: HexagonIconProps) {
  let icon = (
    <>
      <div className="absolute top-0 left-0 flex justify-center w-12 h-12 group-hover:animate-bounce">
        <Hexagon style={{ fill: "#283845", stroke: "#83A0A0" }} />
      </div>
      <div className="absolute top-0 left-0 flex justify-center items-center w-12 h-12 text-green-100 group-hover:animate-bounce">
        {props.icon}
      </div>
    </>
  );
  if (props.activeLink) {
    icon = (
      <a href={props.link} target="_blank">
        {icon}
      </a>
    );
  }
  return (
    <>
      <div className="relative w-8 h-8 group">{icon}</div>
    </>
  );
}

export function HexagonIcon(props: HexagonIconProps) {
  let icon = (
    <>
      <div className="absolute top-0 left-0 flex justify-center w-16 h-16">
        <Hexagon style={{ fill: "#9893DA", stroke: "#A40E4C" }} />
      </div>
      <div className="absolute top-0 left-0 flex justify-center items-center w-16 h-16 text-purple-100">
        {props.icon}
      </div>
    </>
  );
  return (
    <>
      <div className="relative w-16 h-16">{icon}</div>
    </>
  );
}
