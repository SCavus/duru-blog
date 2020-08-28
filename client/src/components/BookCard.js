import React from "react";

export const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={book.url} alt="book_cover" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card title">{book.title}</h4>
        <p className="card-text text-secondary">{book.review}</p>
      </div>
    </div>
  );
};
