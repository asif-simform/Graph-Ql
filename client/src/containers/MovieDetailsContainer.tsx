import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchShipsQuery } from 'generated/graphql'
import { Laoder } from 'components/Loader'
import { Error } from 'components/Error'
import { Movie } from 'components/Movie'

export const MovieDetailsContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { loading, error, data } = useFetchShipsQuery({ variables: { id } })

  return (
    <Fragment>
      {loading ? (
        <Laoder />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Movie ship={data?.ships?.[0]} />
      )}
    </Fragment>
  )
}
