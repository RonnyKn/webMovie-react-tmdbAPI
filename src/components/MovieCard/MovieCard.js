import './MovieCard.css'
import { Button, Modal } from 'react-bootstrap'
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
    <div className='card'>
      <div className="card-image">
        <img src={process.env.REACT_APP_IMG_URL_W300 + poster_path} alt="" />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <div className="card-p">
          <p>ImDb: {vote_average}</p>
          <p>{release_date}</p>
        </div>
      </div>
      <button className='button card-button' onClick={handleShow}>Show Details</button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <div className="modal-image">
              <img src={process.env.REACT_APP_IMG_URL_W500 + poster_path} alt="" />
            </div>
            <div className="modal-body">
              <p><strong>Title: <br /></strong>{title}</p>
              <p><strong>Release: <br /></strong>{release_date}</p>
              <p><strong>Overview: <br /></strong>{overview}</p>
              <p><strong>ImDb: <br /></strong>{vote_average}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default MovieCard;