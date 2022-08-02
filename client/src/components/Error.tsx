import React from 'react'

type IProps = {
  error: any
}

export const Error: React.FC<IProps> = ({ error }) => {
  return <p>{error}</p>
}
