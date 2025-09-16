import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../utils/googleBooksApi";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getBookDetails(id);
  }, [id]);

  const getBookDetails = async (id) => {
    setLoading(true);
    setError("");
    try {
      const results = await getBookById(id);
      setBook(results);
    } catch (e) {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading && <p className="loading">Loading results...</p>}
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}

      {book && (
        <>
          <h1>{book.volumeInfo.title}</h1>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
          <h3>{book.volumeInfo.authors?.join(", ")}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: book.volumeInfo.description || "No description available",
            }}
          ></div>
        </>
      )}
    </div>
  );
}
