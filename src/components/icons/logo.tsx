import Typewriter from "typewriter-effect";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  const introduction = "and introducing...";
  const name = "Jose Garcia";
  const bio = "University Student, UI and Web Developer ";
  return (
    <>
      <div className={bebas.className}>
        <div className="flex flex-col py-4 text-center md:text-left">
          <h1 className="lg:text-lg md:text-md text-green-100">
            {introduction}
          </h1>
          <h1 className="tracking-tight xl:text-7xl lg:text-6xl text-5xl text-blue-200">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter.typeString(name).pauseFor(10000).start();
              }}
            />
          </h1>
          <h1 className="lg:text-lg md:text-md text-green-100">{bio}</h1>
        </div>
      </div>
    </>
  );
}
