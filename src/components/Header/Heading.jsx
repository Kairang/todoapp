import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants'
import Button from '../Common/Button'
import InputBox from '../Common/InputBox'
import { useDispatch } from 'react-redux'
import { searchTitle } from '../../redux/actions'

export default function Heading() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const changeValue = (e) => {
    setTitle(e.target.value)
  }

  const handleGetTitle = () => {
    if (title === '')
      return;
    else {
      dispatch(searchTitle(title))
      setTitle('')
      const searchLink = `${ROUTES.SEARCH.path}/?${title}`
      history.push(searchLink)
    }
  }

  const handleCreateTask = () => {
    history.push(ROUTES.CREATE_TASK.path)
  }

  return (
    <div className='heading'>
        <Button 
            className='task__btn'
            title={ROUTES.CREATE_TASK.name}
            handleClickButton={handleCreateTask}
        />
        <div className='search-group'>
            <InputBox
                className='task__input'
                placeholder='Type something to search'
                value={title}
                handleChangeValue={changeValue}
            />
            <Button 
                handleClickButton={handleGetTitle}
                className='task__btn'
                title='Search'
            />
        </div>
    </div>
  )
}
