const books = require("./data/books.js");
const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
});

app.post("/books", (req, res) => {
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newId = books.length + 1;
  const newBook = {
    id: newId,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    available: true,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});