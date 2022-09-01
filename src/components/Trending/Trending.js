import './Trending.css'
import MovieCard from '../MovieCard/MovieCard'
import { Container, Row, Col } from 'react-bootstrap';

const Trending = ({ movies, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Container>
        <Row>
          <Col md={3}>
            {movies.map((movie, index) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Trending;