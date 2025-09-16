import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() && !author.trim() && !genre.trim()) {
      setError("Please enter at least one search field.");
      return;
    }
    setError("");
    onSearch({
      title: title.trim(),
      author: author.trim(),
      genre: genre.trim(),
    });
  };

  return (
    <form className="search-form" onSubmit={submit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Genre / Keyword"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      {error && (
        <div className="error" role="alert">
          {error}
        </div>
      )}
      <button className="btn" type="submit">
        🔍 Search
      </button>
    </form>
  );
}
