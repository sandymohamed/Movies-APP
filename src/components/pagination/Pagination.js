import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';
import { useState } from 'react';

function AdvancedExample({ sendDataToParent }) {

  const [activPage, setActivePage] = useState(1)
  return (
    <Pagination className=' pagination-warning m-3'>
      <Pagination.First className='links' onClick={() => { sendDataToParent(1) }} />
      {[...Array(7)].map((num, i) => (
        <Pagination.Item 
        key={i} 
        className={i  === activPage? 'active-page': null}
        onClick={() => { 
          sendDataToParent(i + 1);
          setActivePage( i );
         }}
         >{i + 1}</Pagination.Item>
      ))}
      <Pagination.Last className='links' onClick={() => { sendDataToParent(6) }} />
    </Pagination>
  );
}

export default AdvancedExample;
