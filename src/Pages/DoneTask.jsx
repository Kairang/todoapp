import React from 'react'
import PaginatedItems from '../pagination/Pagination';

function DoneTask() {
  return (
    <div className='task-list'>
      <PaginatedItems status='Done' itemsPerPage={12}/>
    </div>
  )
}

export default DoneTask;