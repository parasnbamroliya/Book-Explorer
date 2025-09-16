import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function getThumbnail(volumeInfo) {
  return (
    (volumeInfo.imageLinks &&
      (volumeInfo.imageLinks.thumbnail ||
        volumeInfo.imageLinks.smallThumbnail)) ||
    ""
  );
}

export default function BookCard({ book }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = favorites.some((item) => item.id === book.id);
  const info = book.volumeInfo || {};

  return (
    <div className="book-card">
      <Link
        to={`/book/${book.id}`}
        aria-label={`Open details for ${info.title}`}
      >
        {getThumbnail(info) ? (
          <img src={getThumbnail(info)} alt={`${info.title} cover`} />
        ) : (
          <div
            style={{
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No image
          </div>
        )}
        <h3>{info.title}</h3>
      </Link>

      <p className="note">Author(s): {(info.authors || []).join(", ")}</p>
      <p className="note note-desc">{info.description}</p>

      <div className="card-actions">
        {!isFav ? (
          <button
            className="btn"
            onClick={() => addFavorite({ id: book.id, volumeInfo: info })}
          >
            Add to favorites
          </button>
        ) : (
          <button className="btn" onClick={() => removeFavorite(book.id)}>
            Remove favorite
          </button>
        )}
      </div>
    </div>
  );
}
