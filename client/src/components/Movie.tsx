import React from 'react'
import { IShip } from 'types'

type IProps = {
  ship: IShip
}

export const Movie: React.FC<IProps> = ({ ship }) => {
  const { name, id } = ship

  return (
    <main>
      <ol className="gradient-list">
        <li>
          {id ?? '-'}: {name ?? '-'}
        </li>
      </ol>
    </main>
  )
}
