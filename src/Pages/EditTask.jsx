import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Common/Button'
import InputBox from '../components/Common/InputBox'
import { useHistory, useParams } from 'react-router-dom';
import { deleteTask, updateTask } from '../axios/apis'
import { ROUTES } from '../constants';

function EditTask({ handleGetAllTask }) {
    const tasks = useSelector(state => state.todoList)
    const { id } = useParams()
    const index = tasks.findIndex(task => task.id === Number(id))
    const history = useHistory()

    const [state, setState] = useState({
      title: tasks[index].title,
      creator: tasks[index].creator,
      create_at: tasks[index].create_at,
      desscription: tasks[index].desscription,
      status: tasks[index].status,
    });

    const changeValue = (e) => {
      const { name, value } = e.target
      setState({
        ...state,
        [name] : value
      })
    }

    const handleUpdateTask = async () => {
      await updateTask(id, {...state})
      await handleGetAllTask()
    }

    const handleDeleteTask = async () => {
      history.push(ROUTES.ALL_TASK.path)
      await deleteTask(id)
      await handleGetAllTask()
    }

    const handleResetTask = () => {
      setState({
        title: tasks[index].title,
        creator: tasks[index].creator,
        create_at: tasks[index].create_at,
        desscription: tasks[index].desscription,
        status: tasks[index].status,
      })
    }

    return (
        <div className='create-task'>
            <form>
              <div>
                <span className='task__label'>Title</span> 
                <InputBox 
                  className={'task__input'}
                  value={state.title}
                  name='title'
                  handleChangeValue={(e) => changeValue(e)}
                />
              </div>
              
              <div>
                <span className='task__label'>Creator</span>  
                <InputBox 
                  className='task__input'
                  value={state.creator}
                  name='creator'
                  handleChangeValue={(e) => changeValue(e)}
                />  
              </div>
    
              <div>
                <span className='task__label'>Created at</span>  
                <InputBox 
                  className='task__input'
                  value={state.create_at}
                  readOnly
                />
              </div>
    
              <div>
                <span className='task__label'>Desscription</span>  
                <InputBox 
                  className='task__input'
                  value={state.desscription}
                  name='desscription'
                  handleChangeValue={(e) => changeValue(e)}
                />
              </div>
              <div className='radio-group'>
                <div>
                  <input 
                    type="radio" 
                    className='radio-value'
                    name='status'
                    value='New'
                    checked={state.status === 'New'}
                    onChange={(e) => changeValue(e)}
                  /> 
                  <span className='status-value'>New</span>
                </div>
                <div>
                  <input 
                    type="radio" 
                    className='radio-value'
                    name='status'
                    value='Doing'
                    checked={state.status === 'Doing'}
                    onChange={(e) => changeValue(e)}
                  /> 
                  <span className='status-value'>Doing</span>
                </div>
                <div>
                  <input 
                    type="radio" 
                    className='radio-value'
                    name='status'
                    value='Done'
                    checked={state.status === 'Done'}
                    onChange={(e) => changeValue(e)}
                  /> 
                  <span className='status-value'>Done</span>
                </div>
              </div>
              <div className='btn-group'>
                <Button
                  title='Save'
                  className='task__btn'
                  handleClickButton={handleUpdateTask}
                />
                <Button
                  title='Reset'
                  className='task__btn'
                  handleClickButton={handleResetTask}
                />
                <Button
                  title='Delete'
                  className='task__btn'
                  handleClickButton={handleDeleteTask}
                />
              </div>
            </form>
        </div>
    )
}

export default EditTask;