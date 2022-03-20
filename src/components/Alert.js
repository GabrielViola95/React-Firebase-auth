import React from 'react'

export function Alert({message}) {
  return (
    <div>
        <span style={{color: "red", fontWeight: "bold"}}>{message}</span>
    </div>
  )
}