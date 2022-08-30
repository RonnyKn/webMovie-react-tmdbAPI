import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import './NavigationBar.css'
// import {}

const NavigationBar = ({ searchMovie, handleChange, search, changeTitle }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">myTMDB</Navbar.Brand>
          {/* <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link> */}
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
              <Button onClick={changeTitle} type='submit' variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default NavigationBar;