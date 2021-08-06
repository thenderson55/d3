import React, { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./client";
import { PostgrestResponse } from "@supabase/supabase-js";

type Post = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [posts, setPosts] = useState<PostgrestResponse<Post>>();
  const [post, setPost] = useState<Post>({ id: 0, title: "", content: "" });
  const { title, content } = post;
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const data = await supabase.from<Post>("posts").select();
    setPosts(data);
  }
  async function createPost() {
    await supabase.from("posts").insert([{ title, content }]).single();
    setPost({ id: 0, title: "", content: "" });
    fetchPosts();
  }

  return (
    <div className="App">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        placeholder="Content"
        value={content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <button onClick={createPost}>Create Post</button>
      {posts?.data?.map((post: Post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
