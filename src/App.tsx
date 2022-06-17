import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './global.css';
import Movie from './pages/Movie';

const App: FC = () => (
  <BrowserRouter>
    <Header />
    <main>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </section>
    </main>
  </BrowserRouter>
);

export default App;
