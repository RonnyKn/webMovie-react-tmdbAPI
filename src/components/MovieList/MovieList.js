import './MovieList.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

const MovieList = ({ movies, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Container>
        <Row>
          {movies.map((movie, index) => {
            return (
              <Col md={3} sm={6} xs={12} key={index}>
                <Card >
                  <div >
                    <img src={imgUrl + movie.poster_path} style={{ width: "14rem" }} alt="" key={index} />
                    <h4>{movie.title}</h4>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <button>Show Details</button>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>

      </Container>
    </div>
  )
}
export default MovieList;