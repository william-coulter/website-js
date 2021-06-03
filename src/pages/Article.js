import Markdown from "markdown-to-jsx";
import determinism from "../articles/determinism.md";
import { useEffect, useState } from "react";

// TODO: When multiple articles exist, make this component take in
// the article it needs to load as props. For now, just hard-code it all
function Article() {
  const [article, setArticle] = useState();
  const [error, setError] = useState();
  useEffect(async () => {
    try {
      const res = await fetch(determinism);
      const text = await res.text();
      setArticle(text);
    } catch (e) {
      console.error(`Could not load article" ${e}`);
      setError(e);
    }
  }, []);

  if (error) {
    return <ShowError e={error} />;
  }

  if (!error && article) {
    return (
      <div class="pb-10 -mt-32 text-justify">
        <Markdown children={article} />
      </div>
    );
  }

  return <div />;
}

function ShowError({ e }) {
  <div>
    <h1>Error Loading Article</h1>
    <p>{e}</p>
  </div>;
}

export default Article;
