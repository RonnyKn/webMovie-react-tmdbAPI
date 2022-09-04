import './Trending.css'
import MovieCard from '../MovieCard/MovieCard'
import { Container, Row, Col } from 'react-bootstrap';

const Trending = ({ movies, title }) => {
  return (
    <div className='trending'>
      <Container>
        <br /><br /><br />
        <span className="t-title" ><h1>{title}</h1></span>
        <Row>
          {movies.length !== 0 ? movies.map((movie, index) => (
            <Col md={3}>
              <MovieCard key={movie.id} nama={movie.title || movie.name} rilis={movie.first_air_date || movie.release_date} {...movie} />
            </Col>
          )) :
            <h1 style={{ height: "100vh", color: "white", textAlign: "center" }}><em> Damn, Movies not found!</em></h1>
          }
        </Row>
      </Container>
    </div>
  )
}
export default Trending;