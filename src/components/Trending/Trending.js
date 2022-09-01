import './Trending.css'
import MovieCard from '../MovieCard/MovieCard'
import { Container, Row, Col } from 'react-bootstrap';

const Trending = ({ movies, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Container>
        <Row>
          {movies.map((movie, index) => (
            <Col md={3}>
              <MovieCard key={movie.id} {...movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
export default Trending;