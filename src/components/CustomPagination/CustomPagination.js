import { Pagination } from '@material-ui/lab';
import './CustomPagination.css'

const CustomPagination = ({ setPage, page, numPages = 10 }) => {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
    <div style={{
      width: "100%",
      display: 'flex',
      justifyContent: 'center'

    }}>
      <Pagination
        count={numPages}
        onChange={(e) => handlePageChange(e.target.textContent)}

        color='primary'
      />
    </div>

  )
}
export default CustomPagination; 