import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./single.css"

const params = useParams();

export const SingleBook = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/book/${params.bookId}`)
      .then((res) => setBook(res.data));
  }, []);

  return (
    <div className='card'>
      <div className='card-img-top'>
        <img src={book.url} alt="art_image" className='img-overflow' />
      </div>
      <h3>{book.title}</h3>
      <div className='card-text'>{book.review}</div>
    </div>
  );
};