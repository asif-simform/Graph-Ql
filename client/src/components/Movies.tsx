import React from 'react'
import { IShips } from 'types'
import { history, routes } from 'config/routes'

type IProps = {
  ships: IShips | undefined
}

export const Movies: React.FC<IProps> = ({ ships }) => {
  const gotoDetails = (id: string) => {
    history.push(routes.movieDetails.path_string({ id }))
  }

  return (
    <main>
      <ol className="gradient-list">
        {ships?.map((ship, index) => (
          <li
            key={index}
            onClick={() => gotoDetails(ship?.id)}
            className="movie"
          >
            {ship?.name ?? '-'}: {ship?.model ?? '-'}
          </li>
        ))}
      </ol>
    </main>
  )
}
