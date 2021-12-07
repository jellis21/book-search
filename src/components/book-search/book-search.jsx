import { useState } from "react";
import Modal from '../modal/modal';
import './style.css';

function BookSearch() {
  const [fieldData, setFieldData] = useState({
    author: null,
    title: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.id;

    const fieldDataCopy = Object.assign({}, fieldData, {
      ...fieldData,
    });

    if (type === "author") {
      fieldDataCopy.author = value;
    } else {
      fieldDataCopy.title = value;
    }
    console.log(fieldDataCopy);
    setFieldData(fieldDataCopy);
  };
  // console.log(data);
  // setFieldData({})

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://openlibrary.org/search.json?author=${fieldData.author}&limit=10`
    )
      .then((result) => result.json())
      .then((data) => renderData(data));
  };

  const [response, setResponse] = useState();

  const renderData = (books) => {
    const bookArr = books.docs;
    const listOfBooks = bookArr.map((book, index) => {
      return (
        <li data-bookid={book.key} key={index}>
          {book.author_name}: {book.title}
        </li>
      );
    });
    // console.log(books.docs[0].author_name);
    setResponse(listOfBooks);
  };

  const handleClick = e => {
    fetch(`http://openlibrary.org${e.target.getAttribute('data-bookid')}.json`)
    .then((res) => res.json())
    .then((data) => setBookDescription(data.description))
  }

  const [bookDescription, setBookDescription] = useState(null);

  const closeModal = () => {
    setBookDescription(null);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="author">Author</label>
          <input id="author" onChange={handleChange} type="text" />
        </div>
        <div className="form__field">
          <label htmlFor="title">Title</label>
          <input id="title" onChange={handleChange} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
      <div className="results">
        <h2>Search Results</h2>
        <ul className="results" onClick={handleClick}>{response}</ul>
        </div>)}
        {bookDescription && (
        <Modal description={bookDescription} closeModal={closeModal}/>
        )}
    </>
  );
}

export default BookSearch;
