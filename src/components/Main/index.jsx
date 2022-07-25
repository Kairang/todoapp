import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants';

function RenderTasks() {
  const tasks = useSelector( state => state.currentItems)
  console.log(tasks);
  const history = useHistory()

  const handleEditTask = (id) => {
    const editLink = `${ROUTES.EDIT_TASK.path}/${id}`
    history.push(editLink)
  }
  return (
    <>
        {tasks && tasks.map((task) => (
            <div className='task' key={task.id} onClick={() => handleEditTask(task.id)} >
                <h4>Title: {task.title}</h4>
                <p>Creator: {task.creator}</p>
                <p style={{color: task.status==='New'?'green':task.status==='Doing'?'Orange':'blue'}}>
                  <strong>Status: {task.status}</strong>
                </p>
                <div className='line'></div>
                <p><strong>Desscription:</strong></p>
                <p className='task-content'>{task.desscription}</p>
            </div>
        ))}
    </>
  )
}

export default RenderTasks;