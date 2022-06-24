import React from 'react'
import Button from '../Common/Button'
import InputBox from '../Common/InputBox'

export default function Heading() {
  return (
    <div className='heading'>
        <Button 
            className='task__create'
            title='Create New Task'
        />
        <div className='search-group'>
            <InputBox
                className='task__input'
                placeholder='Type something to search'
            />
            <Button 
                className='task__submit'
                title='Search'
            />
        </div>
    </div>
  )
}
