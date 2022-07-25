import React from 'react'
import { useSelector } from 'react-redux';

export default function SearchTask() {
  const search = useSelector ( state => state.search)
  const tasksCurrent = useSelector( state => state.todoList)

  const tasks = tasksCurrent.filter(task => task.title === search)
  return (
    <div className='task-list'>
      <div className={`${search?'item-group':''}`}>
        {tasks.length?tasks.map((task) => (
            <div className='task' key={task.id}>
                <h4>Title: {task.title}</h4>
                <p>Creator: {task.creator}</p>
                <p style={{color: task.status==='New'?'green':task.status==='Doing'?'Orange':'blue'}}>
                  <strong>Status: {task.status}</strong>
                </p>
                <div className='line'></div>
                <p><strong>Desscription:</strong></p>
                <p className='task-content'>{task.desscription}</p>
            </div>
        )):
            <div>
                <p>Not Found Task With Title '{search}'</p>
            </div>
        }
      </div>
    </div>
  )
}
