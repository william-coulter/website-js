import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [error, setError] = useState();
  const [articleText, setArticleText] = useState();

  const { article } = useParams();

  useEffect(() => {
    async function getArticle() {
      try {
        const res = await fetch(`../articles/${article}.md`);
        const text = await res.text();
        setArticleText(text);
      } catch (e) {
        console.error(`Could not load article" ${e}`);
        setError(e);
      }
    }
    getArticle();
  }, []);

  if (error) {
    return <ShowError e={error} />;
  }

  if (!error && articleText) {
    return (
      <div class="pb-10 -mt-32 text-justify">
        <Markdown children={articleText} />
      </div>
    );
  }

  // TODO: This should be loading state
  return <div />;
}

function ShowError({ e }) {
  <div>
    <h1>Error Loading Article</h1>
    <p>{e}</p>
  </div>;
}

export default Article;
