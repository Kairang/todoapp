import React from 'react'
import PaginatedItems from '../pagination/Pagination';

function AllTask() {
  return (
    <div className='task-list'>
      <PaginatedItems status='' itemsPerPage={12}/>
    </div>
  )
}

export default AllTask;