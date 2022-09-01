import './MovieList.css'
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import { useState } from 'react'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

const MovieList = ({ movies, title }) => {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <h1>{title}</h1>
      <Container>
        <Row>
          {movies.map((movie, index) => {
            return (
              <Col md={3} key={movie.id} {...movie}>
                <Card>
                  <div >
                    <img src={imgUrl + movie.poster_path} style={{ width: "14rem" }} alt="" key={index} />
                    <h4>{movie.title}</h4>
                    <p>Release Date: {movie.release_date}</p>
                    <p>ImDb: {movie.vote_average}</p>
                    <button onClick={handleShow}>Show Details</button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <img src={imgUrl + movie.poster_path} alt="" />
                        <h4>Title: {movie.title}</h4>
                        <h4>Release: {movie.release_date}</h4>
                        <h4>Overview: {movie.overview}</h4>
                        <h4>ImDb: {movie.vote_average}</h4>
                      </Modal.Body>
                      <Modal.Footer>
                        <button onClick={handleClose}>Close</button>
                      </Modal.Footer>

                    </Modal>
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