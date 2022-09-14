import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

// import {}

const NavigationBar = ({ searchMovie, handleChange, search, changeTitle }) => {
  return (
    <div >
      <span className='header' onClick={() => window.scroll(0, 0)} >🎬 RON'S ENTERTAINMENT 🎥</span>

      {/* <Navbar style={{ width: '100%' }} bg="dark" variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Brand >
            <Link to="/Home" className='n-brand'> <h3>myTMDB</h3> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={searchMovie}>
              <Form.Control
                type="search"
                placeholder="Search Movies.."
                className="me-2"
                aria-label="Search"
                name='search'
                value={search}
                onChange={handleChange}
              />
              <Button onClick={changeTitle} type='submit' variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  )
}
export default NavigationBar;