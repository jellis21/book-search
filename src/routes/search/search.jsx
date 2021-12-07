import { Outlet } from 'react-router-dom';
import BookSearch from '../../components/book-search/book-search';
import './style.css';

function Search() {
  return (
    <div>
      <BookSearch />
      <Outlet />
    </div>
  );
}

export default Search;