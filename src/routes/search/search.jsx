import { Outlet } from "react-router-dom";
// import Search from '../../components/search/index';
import './style.css';

function Search() {
  return (
    <div>
      I am search
      <Outlet />
    </div>
  );
}

export default Search;