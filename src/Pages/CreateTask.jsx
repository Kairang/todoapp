import React from 'react'
import { useState } from 'react'
import { createNewTask } from '../axios/apis';
import Button from '../components/Common/Button'
import InputBox from '../components/Common/InputBox'

export default function CreateTask(props) {
  const [state, setState] = useState({
    title: '',
    creator: '',
    create_at: new Date().toLocaleString(),
    desscription: '',
  });

  const [isValid, setIsValid] = useState(false)

  const handleChangeValue = (e) => {
    const { name, value } = e.target
    if (!value.trim()) 
      setIsValid(false)
    setState({
      ...state,
      [name] : value
    })
  }
  const handleSaveTask = async () => {
    // Check entry value
    if (!state.title.trim() || !state.creator.trim() || !state.desscription.trim()){
      setIsValid(true)
      return;
    }

    // Set task
    const task = {
      id: new Date().getTime(),
      title: state.title,
      creator: state.creator,
      status: 'New',
      desscription: state.desscription,
      create_at: state.create_at,
    }

    // Get value & Trans to server
    await createNewTask(task)
    // Update new task
    await props.handleGetAllTask()
    // Set value to entry
    setState ({
      title: '',
      creator: '',
      create_at: new Date().toLocaleString(),
      desscription: '',
    })
  }

  return (
    <div className='create-task'>
        <form>
          <div>
            <span className='task__label'>Title</span> 
            <InputBox 
              className={'task__input'}
              placeholder='Title of Task'
              handleChangeValue={handleChangeValue}
              value={state.title}
              name = 'title'
              style={{borderColor: state.title===''?isValid?'red':'black':'green'}}
            />
          </div>
          
          <div>
            <span className='task__label'>Creator</span>  
            <InputBox 
              className='task__input'
              placeholder='Name of Craetor'
              handleChangeValue={handleChangeValue}
              value={state.creator}
              name = 'creator'
              style={{borderColor: state.creator===''?isValid?'red':'black':'green'}}
            />  
          </div>

          <div>
            <span className='task__label'>Created at</span>  
            <InputBox 
              className='task__input'
              placeholder='Time Create Task'
              name='create_at'
              value={state.create_at}
              readOnly
            />
          </div>

          <div>
            <span className='task__label'>Desscription</span>  
            <InputBox 
              className='task__input'
              placeholder='Desscription Details'
              handleChangeValue={handleChangeValue}
              value={state.desscription}
              name = 'desscription'
              style={{borderColor: state.desscription===''?isValid?'red':'black':'green'}}
            />
          </div>

          <div className='btn-group'>
            <Button
              handleClickButton={handleSaveTask}
              title='Save'
              className='task__btn'
            />
          </div>
        </form>
    </div>
  )
}
