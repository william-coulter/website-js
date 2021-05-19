import { Link, useLocation } from "react-router-dom";
import Up from "../icons/chevron-up.svg";

function Navbar() {
  const location = useLocation();
  const paths = ["home", "resume", "articles", "about"];

  return (
    <div>
      <div class="bg-green-500 h-32 -mt-8 -mx-4 flex flex-row justify-center content-center shadow-md">
        {paths.map((p) => (
          <StyledLink name={p} location={location} />
        ))}
      </div>
      <div class="w-6/12 mx-auto -mt-10">
        <HeaderCard heading={location.pathname.slice(1)} />
      </div>
    </div>
  );
}

function StyledLink({ name, location }) {
  const selected = name === location.pathname.slice(1);
  return (
    <div class="flex flex-col justify-center content-center px-4">
      <Link
        to={`/${name}`}
        class="font-mono text-lg font-medium text-white hover:text-gray-200"
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
      <div class="font-mono text-center text-lg font-medium text-black">
        {heading}
      </div>
    </div>
  );
}

export default Navbar;
