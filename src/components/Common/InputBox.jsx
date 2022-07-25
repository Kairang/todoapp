import React from 'react'

export default function InputBox(props) {
  return (
    <input 
        type="text"
        readOnly={props.readOnly}
        style={props.style}
        name={props.name}
        className={props.className} 
        value={props.value}
        onChange={props.handleChangeValue}
        placeholder={props.placeholder}
    />
  )
}
