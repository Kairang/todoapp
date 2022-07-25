import React from 'react'
import PaginatedItems from '../pagination/Pagination';

function NewTask() {
  return (
    <div className='task-list'>
       <PaginatedItems status='New' itemsPerPage={12}/>
    </div>
  )
}

export default NewTask;