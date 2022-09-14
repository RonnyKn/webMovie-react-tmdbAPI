import './MovieCard.css'
import { Badge, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

const MovieCard = ({ title, nama, poster_path, release_date, vote_average, overview, media_type, rilis }) => {
  const [show, setShow] = useState(false)
  const handleShow = (e) => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <div
      className='card' style={{ background: 'black', borderRadius: '10px', padding: "7px 0" }}
    >
      <Badge
        className='movie-badge'
        bg={vote_average >= 5.9 ? 'primary' : 'secondary'} >{vote_average.toFixed(1)}</Badge>
      <div className="card-image">
        <img src={process.env.REACT_APP_IMG_URL_W300 + poster_path} alt="" />
      </div>
      <div className="card-content">
        <h5 style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{nama}</h5>
        <div className="card-p">
          <p>{media_type === "tv" ? "Tv Series" : "Movie"}</p>
          <p>{rilis}</p>
        </div>
      </div>
      <button className='button card-button' onClick={handleShow}>Show Details</button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal"
        size='lg'
      // style={{ backgroundColor: 'ActiveBorder' }}
      >
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <div className='modal-tes'>
              <img src={process.env.REACT_APP_IMG_URL_W500 + poster_path} alt="" className="modal-image" />
              <div className="modal-body">
                <p><strong>Title: <br /></strong>{nama}</p>
                <p><strong>Release: <br /></strong>{rilis}</p>
                <p><strong>Overview: <br /></strong>{overview}</p>
                <p><strong>ImDb: <br /></strong>{vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' >Watch Trailer</Button>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default MovieCard;