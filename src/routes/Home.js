import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import BookGrid from "../components/BookGrid";
import { searchBooks } from "../utils/googleBooksApi";
import "../App.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const results = await searchBooks({ ...query, maxResults: 20 });
      setBooks(results);
    } catch (e) {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="search-panel">
        <h2>📚 Book Explorer</h2>
        <SearchForm onSearch={handleSearch} />
        <p className="note">
          Search by title, author, or genre/keyword. At least one field is
          required.
        </p>
      </div>
      <section className="results-panel">
        {loading && <p className="loading">Loading results...</p>}
        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}
        {!loading && !error && <BookGrid books={books} />}
      </section>
    </div>
  );
}
