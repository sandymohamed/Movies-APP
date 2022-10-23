// import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';



function AdvancedExample({ sendDataToParent }) {


  return (
    <Pagination className='m-5'>
      <Pagination.First />
      <Pagination.Prev />
      {
        [...Array(10)].map((num, i) => (

          <Pagination.Item key={i} onClick={() => { sendDataToParent(i + 1) }} >{i + 1}</Pagination.Item>
        ))
      }
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedExample;