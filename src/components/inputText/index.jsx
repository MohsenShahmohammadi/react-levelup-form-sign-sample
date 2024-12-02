import React, { useRef } from 'react'
import "./index.css"

const InputText = ({title,inputRef}) => {
  return (
    <div className="form-item-group">
    <p className="form-label">{title}</p>
    <input ref={inputRef} type="text" className="form-control"/>
  </div>
  )
}

export default InputText