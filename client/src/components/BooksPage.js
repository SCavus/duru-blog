import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "./Cards/BookCard";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/books")
      .then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card-columns">
        {books.map((book, index) => (
          <div class="card bg-primary" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};
