import { useCallback, useEffect, useState } from 'react'
import './Button.css'

function AlertComponent(props) {
  return (
    <div className={props.color}>Màu hiện tại: {props.color}</div>
  )
}

export default AlertComponent
