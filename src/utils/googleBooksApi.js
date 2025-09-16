import axios from "axios";

const BASE = "https://www.googleapis.com/books/v1/volumes";

export async function searchBooks({
  title,
  author,
  genre,
  startIndex = 0,
  maxResults = 20,
}) {
  // build advanced query parts
  const parts = [];
  if (title) parts.push(`intitle:${encodeURIComponent(title)}`);
  if (author) parts.push(`inauthor:${encodeURIComponent(author)}`);
  if (genre) parts.push(`subject:${encodeURIComponent(genre)}`);
  const query = parts.length
    ? parts.join("+")
    : encodeURIComponent(title || author || genre || "");

  const url = `${BASE}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`;
  const res = await axios.get(url);
  return res.data.items || [];
}

export async function getBookById(id) {
  const res = await axios.get(`${BASE}/${id}`);
  return res.data;
}
