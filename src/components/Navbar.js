import { Link, useLocation } from "react-router-dom";
import Up from "../icons/chevron-up.svg";

function Navbar() {
  const location = useLocation();
  const paths = ["about", "resume", "articles"];

  return (
    <div class="h-10 font-mono text-gray-600 flex flex-row justify-center space-x-6 border-b-2">
      {paths.map((p) => (
        <StyledLink name={p} location={location} />
      ))}
    </div>
  );
}

function StyledLink({ name, location }) {
  const selected = name === location.pathname.slice(1);
  return (
    <div class="flex flex-col items-center">
      <div>
        <Link to={`/${name}`} class="hover:text-gray-400">
          {name}
        </Link>
      </div>
      {selected ? (
        <div class="-mt-1.5">
          <img src={Up} alt="chevron up" />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Navbar;
