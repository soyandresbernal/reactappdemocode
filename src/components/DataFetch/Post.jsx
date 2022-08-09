import React, { useState } from "react";

export default function App() {
  const [isLoading, setIsloading] = useState(false);

  async function createPost(event) {
    setIsloading(true);
    try {
      event.preventDefault();
      const form = event.currentTarget;
      const data = {
        title: form.title.value,
        body: form.body.value,
        userId: 1,
      };
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
        }
      );
      console.log(await response.json());
      form.reset();
    } finally {
      setIsloading(false);
    }
  }
  return (
    <div>
      <h1>create new Post</h1>
      <form onSubmit={createPost}>
        <div>
          <label htmlFor='title'>Titulo</label>
          <input id='title' type='text' name='title' />
        </div>
        <div>
          <label htmlFor='body'>Contenido</label>
          <textarea id='body' name='body' />
        </div>
        <button disabled={isLoading}>Crear</button>
      </form>
    </div>
  );
}
