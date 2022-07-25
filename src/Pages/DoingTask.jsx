import React from 'react'
import PaginatedItems from '../pagination/Pagination'

function DoingTask() {
  return (
    <div className='task-list'>
      <PaginatedItems status='Doing' itemsPerPage={12}/>
    </div>
  )
}

export default DoingTask