import React, { Fragment } from 'react'
import { useFetchShipsQuery } from 'generated/graphql'
import { Laoder } from 'components/Loader'
import { Error } from 'components/Error'
import { Movies } from 'components/Movies'

export const MoviesListContainer: React.FC = () => {
  const { loading, error, data } = useFetchShipsQuery()

  return (
    <Fragment>
      {loading ? (
        <Laoder />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Movies ships={data?.ships} />
      )}
    </Fragment>
  )
}
