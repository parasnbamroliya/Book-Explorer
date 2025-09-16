import React from "react";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  if (!books || books.length === 0) return <p>No results found.</p>;

  return (
    <section aria-label="results" className="book-grid">
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </section>
  );
}
