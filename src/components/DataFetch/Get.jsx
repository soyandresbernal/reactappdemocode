import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("Loading");

  if (status === "loading") return <span>Loading..</span>;
  if (status === "error") return <span>Error</span>;

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(response.json());
        const newPost = await response.json();
        setPosts(newPost);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      <h1> Posts</h1>

      <section>
        {posts.map(post => (
          <article key={post.id}>
            {post.id} - {post.title}
          </article>
        ))}
      </section>
    </div>
  );
}
