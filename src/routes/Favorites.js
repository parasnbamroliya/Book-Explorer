import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, removeFavorite, updateNote } = useFavorites();
  const [editingId, setEditingId] = useState(null);
  const [noteVal, setNoteVal] = useState("");

  const startEdit = (fav) => {
    setEditingId(fav.id);
    setNoteVal(fav.note || "");
  };

  return (
    <div className="container">
      <h2>Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet. :)</p>}

      <div className="grid">
        {favorites.map((item) => (
          <article key={item.id} className="card">
            <img src={item.volumeInfo.imageLinks?.thumbnail} alt="" />
            <h3>{item.volumeInfo?.title}</h3>
            <p className="note">
              {(item.volumeInfo?.authors || []).join(", ")}
            </p>
            <p className="note">{item.note}</p>

            {editingId === item.id && (
              <div style={{ marginTop: 8, width: "100%" }}>
                <textarea
                  value={noteVal}
                  onChange={(e) => setNoteVal(e.target.value)}
                  rows={3}
                  style={{ width: "100%" }}
                />
                <div
                  className="card-actions"
                  style={{ justifyContent: "center", margin: 4 }}
                >
                  <button
                    className="btn"
                    onClick={() => {
                      updateNote(item.id, noteVal);
                      setEditingId(null);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="btn"
                    onClick={() => setEditingId(null)}
                    style={{ marginLeft: 8 }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="card-actions">
              <button className="btn" onClick={() => removeFavorite(item.id)}>
                Remove
              </button>
              <button
                className="btn"
                style={{ marginLeft: 8 }}
                onClick={() => startEdit(item)}
              >
                Edit note
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
