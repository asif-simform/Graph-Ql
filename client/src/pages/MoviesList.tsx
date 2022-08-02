import React, { Fragment } from 'react'
import { MoviesListContainer } from 'containers/MoviesListContainer'
import { AddNewMovie } from 'components/AddNewMovie'

const MoviesList: React.FC = () => {
  return (
    <Fragment>
      <AddNewMovie />
      <MoviesListContainer />
    </Fragment>
  )
}
export default MoviesList
