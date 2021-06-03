import { Link } from "react-router-dom";
import resume from "../images/resume.pdf";

function Home() {
  return (
    <div class="h-full flex flex-col justify-center space-y-6">
      <div class="text-center">
        <h1 class="text-center">William Coulter</h1>
      </div>
      <div class="flex flex-row justify-center space-x-6 pb-2 border-b border-primary border-opacity-80">
        <StyledLink text="About" />
        <Link
          to={resume}
          class="no-underline text-center hover:opacity-80"
          target="blank"
        >
          <p class="text-heading2">Resume</p>
        </Link>
      </div>
      <ArticleLink
        text="A deterministic universe and what to do about it"
        article="determinism"
        date="01 June 2021"
      />
    </div>
  );
}

function StyledLink({ text }) {
  return (
    <Link to={`/${text}`} class="no-underline text-center hover:opacity-80">
      <p class="text-heading2">{text}</p>
    </Link>
  );
}

function ArticleLink({ text, article, date }) {
  return (
    <div class="flex flex-row justify-between">
      <Link
        to={`/articles/${article}`}
        class="no-underline text-center hover:opacity-80"
      >
        <p class="italic font-light font-color text-heading2">{text}</p>
      </Link>
      <p class="font-light font-color text-secondary opacity-80">{date}</p>
    </div>
  );
}

export default Home;
