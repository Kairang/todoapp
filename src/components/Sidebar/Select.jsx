import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

export default function Select() {
  const tasksCurrent = useSelector (state => state.todoList)
  
  const getLengthTasks = (status) => {
    const tasksFilter = tasksCurrent.filter( task => task.status === status)
    const tasks = status?tasksFilter:tasksCurrent
    const length = tasks.length

    return length
  }
  return (
    <div className='selection'>
        <ul>
            <li><Link to={ROUTES.ALL_TASK.path}>{ROUTES.ALL_TASK.name} - {getLengthTasks()}</Link></li>
            <li><Link to={ROUTES.NEW_TASK.path}>{ROUTES.NEW_TASK.name} - {getLengthTasks('New')}</Link></li>
            <li><Link to={ROUTES.DOING_TASK.path}>{ROUTES.DOING_TASK.name} - {getLengthTasks('Doing')}</Link></li>
            <li><Link to={ROUTES.DONE_TASK.path}>{ROUTES.DONE_TASK.name} - {getLengthTasks('Done')}</Link></li>
        </ul>
    </div>
  )
}
