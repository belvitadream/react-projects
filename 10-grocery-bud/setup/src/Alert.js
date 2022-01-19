import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [list]) // every time the list is changed, the new timeout is created.

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
