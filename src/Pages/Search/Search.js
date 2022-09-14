import { Button, Container, Form } from 'react-bootstrap';
import './Search.css'

const Search = ({ searchMovie, handleChange, search, changeTitle }) => {
  return (
    <div>
      <Container>
        <h1>this is search menu</h1>
        <input type="text" />
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
      </Container>
    </div>
  )
}
export default Search;