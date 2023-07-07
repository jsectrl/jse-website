import Typewriter from "typewriter-effect";

export default function NamePane() {
  let left = "<span style= 'color: #6BF178'>{ </span>";
  let name =
    "<span style='color: #FFE74C'>jse</span><span style='color: #CFD2CD'>.</span><span style='color: #FF5964'>dev</span>";
  let right = "<span style= 'color: #6BF178'> }<span>";
  return (
    <>
      <h1 className="text-4xl text-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(left + name + right)
              .pauseFor(1500)
              .start();
          }}
        />
      </h1>
    </>
  );
}
