import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Trending from './components/Trending/Trending';
import NavigationBar from './components/Navbar/NavigationBar';
import axios from 'axios';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('Trending Movies')
  const [page, setPage] = useState(1)

  const changeTitle = () => {
    setTitle('Results Movies :')
  }

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_TRENDING}&page=${page}`
    )
    setMovies(data.results)
  }

  useEffect(() => {
    fetchTrending()
    // fetch(`${process.env.REACT_APP_BASE_URL}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMovies(data.results)
    //   })
  }, [page])

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
        <Routes>
          <Route
            exact path="/" element={<Navigate to="/Home" />}  >
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
          page={page}
          setPage={setPage}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
