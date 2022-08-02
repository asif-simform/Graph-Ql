import React from 'react'

export const Button: React.FC<any> = props => {
  return <button {...props}>{props.children}</button>
}
