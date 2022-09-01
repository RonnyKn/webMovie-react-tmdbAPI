import { useEffect, useState } from 'react';
import './App.css';
import Trending from './components/Trending/Trending';
import NavigationBar from './components/Navbar/NavigationBar';

const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=9ed7a246b9dc5b5c41cfb3f454fa54c2&query='
const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=9ed7a246b9dc5b5c41cfb3f454fa54c2'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('Trending Movies')

  const changeTitle = () => {
    setTitle('Search Movies')
  }

  const searchMovie = async (e) => {
    e.preventDefault(); //anti perilaku refresh button
    try {
      const response = await fetch(`${searchUrl}${search}`)
      const data = await response.json();
      setMovies(data.results)
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const data = e.target.value;
    setSearch(data)
  }

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])

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
