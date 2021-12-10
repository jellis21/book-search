import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { executeSearch } from '../../redux/actions/addNewFriend';
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

const mapDispatchToProps = {
  executeSearch
}

export default connect(null, mapDispatchToProps)(Search);