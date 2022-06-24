import React from 'react'

export default function InputBox(props) {
  return (
    <input 
        type="text" 
        className={props.className} 
        value={props.value}
        onChange={props.handleChangeValue}
        placeholder={props.placeholder}
    />
  )
}
