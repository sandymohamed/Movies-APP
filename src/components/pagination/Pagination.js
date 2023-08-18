import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';

function AdvancedExample({ sendDataToParent }) {
  return (
    <Pagination className='m-5 pagination-warning'>
      <Pagination.First onClick={() => { sendDataToParent(1) }} />
      {[...Array(7)].map((num, i) => (
        <Pagination.Item key={i} onClick={() => { sendDataToParent(i + 1) }}>{i + 1}</Pagination.Item>
      ))}
      <Pagination.Last onClick={() => { sendDataToParent(6) }} />
    </Pagination>
  );
}

export default AdvancedExample;
