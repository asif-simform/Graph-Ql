import React, { Fragment } from 'react'

export const Input: React.FC<any> = props => {
  const { isError, errorMesage, ...rest } = props

  return (
    <Fragment>
      <div className="form-field-box">
        <input {...rest} />
        {isError && <p className="error">{errorMesage}</p>}
      </div>
    </Fragment>
  )
}
