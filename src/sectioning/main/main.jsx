import { Routes, Route } from "react-router-dom";
import About from "../../routes/about/about";
import Login from "../../routes/login/login";
import Search from "../../routes/search/search";
import Landing from "../../routes/landing/landing";
import Redux from '../../routes/redux/redux';
import "./style.css";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />}>
          <Route
            path=":id"
            element={
              <p>hardcoded for now when using an id. Will change later!</p>
            }
          />
        </Route>
        <Route path="redux" element={<Redux />}/>
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </main>
  );
}

export default Main;
