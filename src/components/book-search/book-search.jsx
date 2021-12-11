import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { executeSearch } from "../../redux/actions/addNewFriend";
import Modal from "../modal/modal";
import "./style.css";

function BookSearch({ executeSearch, results }) {
  const createListOfBooks = (books) => {
    // const bookArr = books.docs;
    const listOfBooks = books.map((book, index) => {
      return (
        <li data-bookid={book.key} key={index}>
          {book.author_name}: {book.title}
        </li>
      );
    });
    return listOfBooks;
  };

  // define state
  const [fieldData, setFieldData] = useState({
    author: null,
    title: null,
  });
  const [listOfBooks, setListOfBooks] = useState();
  const [response, setResponse] = useState();
  const [bookDescription, setBookDescription] = useState(null);

  useEffect(() => {
    const listOfBooks = createListOfBooks(results);
    setListOfBooks(listOfBooks);
  }, [results]);

  // "Event Listeners" for the jsx
  const handleClick = (e) => {
    fetch(`http://openlibrary.org${e.target.getAttribute("data-bookid")}.json`)
      .then((res) => res.json())
      .then((data) => setBookDescription(data.description));
  };

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
    setFieldData(fieldDataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeSearch(fieldData.author, fieldData.title);
  };

  // close modal once rendered
  const closeModal = () => {
    setBookDescription(null);
  };

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
      {results && (
        <div className="results">
          <h2>Search Results</h2>
          <ul className="results" onClick={handleClick}>
            {listOfBooks}
          </ul>
        </div>
      )}
      {bookDescription && (
        <Modal description={bookDescription} closeModal={closeModal} />
      )}
    </>
  );
}

const mapDispatchToProps = {
  executeSearch,
};

const mapStateToProps = (state) => ({
  results: state.searchResults,
}); // the extra parens around the curly braces means this is an implicit return (meaning "return" isn't needed)

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
