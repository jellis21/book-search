import {Route, Routes} from 'react-router-dom';
import Search from '../../routes/search/search';

import "./style.css";

function Main() {
  return (
    <main>
      I am main
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default Main;
