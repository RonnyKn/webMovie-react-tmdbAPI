import './MovieCard.css'
import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react'

const MovieCard = ({ title, poster_path, release_date, vote_average, overview }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <div>
      <Card>
        <div >
          <img src={process.env.REACT_APP_IMG_URL_W300 + poster_path} style={{ width: "14rem" }} alt="" />
          <h4>{title}</h4>
          <p>Release Date: {release_date}</p>
          <p>ImDb: {vote_average}</p>
          <button onClick={handleShow}>Show Details</button>
          <Modal
            show={show}
            onHide={handleClose}
          >
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={process.env.REACT_APP_IMG_URL_W500 + poster_path} alt="" />
              <h4>Title: {title}</h4>
              <h4>Release: {release_date}</h4>
              <h4>Overview: {overview}</h4>
              <h4>ImDb: {vote_average}</h4>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card>

    </div>
  )
}
export default MovieCard;