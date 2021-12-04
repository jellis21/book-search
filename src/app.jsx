import { Routes, Route } from 'react-router-dom'
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import Footer from './sectioning/footer/footer';
import Search from './routes/search/search';
// import logo from './logo.svg';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
