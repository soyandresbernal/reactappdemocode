import React, { useState, useEffect } from "react";

const URL = "https://app.fakejs.com";
export default function App() {
  const [state, setState] = useState("loading");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(URL);
        if (response.status == 200) {
          const newPosts = await response.json();
          setPosts(newPosts);
          setState("error");
        } else {
          setState("error");
        }
      } catch (error) {
        console.log(error);
        setState("error");
      }
    }

    loadPost();
  });

  if (state == "loading") return <div>Loading</div>;
  if (state == "error") return <div>Error</div>;

  return (
    <div>
      <h1>Posts</h1>

      <section>
        {posts.map(post => (
          <article key={post.id}>
            {post.id}- {post.title}
          </article>
        ))}
      </section>
    </div>
  );
}
