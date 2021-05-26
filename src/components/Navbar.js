import { Link, useLocation } from "react-router-dom";
import Up from "../icons/chevron-up.svg";

const paths = ["Home", "Resume", "Articles", "About"];
const DEFAULT_PATH = paths[0];

function Navbar() {
  const location = useLocation();
  const currentPath =
    location.pathname.slice(1) === ""
      ? DEFAULT_PATH
      : location.pathname.slice(1);

  return (
    <div>
      <div class="bg-green-500 h-32 -mt-8 -mx-4 flex flex-row justify-center content-center shadow-md">
        {paths.map((p) => (
          <StyledLink name={p} current={currentPath} />
        ))}
      </div>
      <div class="w-52 mx-auto -mt-10">
        <HeaderCard heading={currentPath} />
      </div>
    </div>
  );
}

function StyledLink({ name, current }) {
  const selected = name === current;

  return (
    <div class="flex flex-col justify-center content-center px-4">
      <Link
        to={`/${name}`}
        class="font-sans text-lg font-medium text-white hover:text-gray-200"
      >
        {name}
      </Link>

      <div
        class={`flex justify-center -mt-1.5 ${
          selected ? "visible" : "invisible"
        }`}
      >
        <img src={Up} alt="chevron up" />
      </div>
    </div>
  );
}

function HeaderCard({ heading }) {
  return (
    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="font-sans text-center text-lg font-medium text-black">
        {heading}
      </div>
    </div>
  );
}

export default Navbar;
