import will from "../images/will.jpeg";

function About() {
  return (
    <div class="pb-10 -mt-32">
      <img src={will} alt="A handsome young man" />
      <p class="text-center">
        Aspiring software engineer living in Sydney, Australia.
      </p>
      <p class="text-center">
        This is a place to store things that I find interesting and write about.
        No offense will be taken if you don't read any of my articles.
      </p>
      <div class="flex flex-row justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/william-coulter-854511147/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/william-coulter" target="_blank">
          GitHub
        </a>
        <a href="https://gitlab.com/william-coulter" target="_blank">
          GitLab
        </a>
      </div>
    </div>
  );
}

export default About;
