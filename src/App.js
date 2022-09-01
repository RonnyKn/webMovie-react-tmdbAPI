import { useEffect, useState } from 'react';
import './App.css';
import Trending from './components/Trending/Trending';
import NavigationBar from './components/Navbar/NavigationBar';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('Trending Movies')

  const changeTitle = () => {
    setTitle('Search Movies')
  }

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}`
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
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault(); //button anti perilaku refresh page
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SEARCH_URL}${search}`
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
    <div className='App'>
      <NavigationBar
        changeTitle={changeTitle}
        search={search}
        searchMovie={searchMovie}
        handleChange={handleChange} />
      <Trending
        title={title}
        movies={movies}
      />
    </div>
  );
}

export default App;
