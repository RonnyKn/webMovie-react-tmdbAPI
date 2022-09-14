import { useState } from 'react';
import React from 'react';
import './App.css';
import Trending from './Pages/Trending/Trending';
import NavigationBar from './components/Navbar/NavigationBar';
import axios from 'axios';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Search from './Pages/Search/Search';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('Trending Movies')
  const [page, setPage] = useState(1)

  const changeTitle = () => {
    setTitle('Results Movies :')
  }

  const searchMovie = async (e) => {
    e.preventDefault(); //button anti perilaku refresh page
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SEARCH_URL}${search}&page=1`
      )
      setMovies(data.results)
      // const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}${search}`)
      // const data = await response.json();
      // setMovies(data.results)
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const data = e.target.value;
    setSearch(data)
  }

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route
              exact path="/" element={<Navigate to={<Trending />} />}  >
            </Route>

            <Route
              path="/search" element={<Navigate to={<Search
                changeTitle={changeTitle}
                search={search}
                searchMovie={searchMovie}
                handleChange={handleChange} />} />}>
            </Route>
          </Routes>
          <NavigationBar
            changeTitle={changeTitle}
            search={search}
            searchMovie={searchMovie}
            handleChange={handleChange}
          />

          <Trending
            title={title}
            movies={movies}
            setMovies={setMovies}
            page={page}
            setPage={setPage}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
