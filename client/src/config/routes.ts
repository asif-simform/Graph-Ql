import * as React from 'react'
import { createBrowserHistory } from 'history'
import { RouteComponentProps } from 'react-router-dom'

export const history = createBrowserHistory()

export type IRoutesConfig = {
  [key: string]: {
    id: string
    name: string
    description?: string
    path: string
    path_string: (params: any) => string
    exact: boolean
    isPrivate: boolean
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>
  }
}

/**
 * @description the aim to create this config is to have
 *  a single source of truth for the routes defination.
 *  the reason we are not importing the components here
 *  for the property `component` is to avoid circular
 *  import dependencies error.
 *  components will be assigned in config/routes.ts
 */
export const routes: IRoutesConfig = {
  index: {
    id: 'index',
    name: 'Movies',
    description: 'Movies Listing',
    path: '/',
    path_string: () => {
      return `/`
    },
    exact: true,
    isPrivate: false,
    component: React.lazy(() => import('pages/MoviesList')),
  },
  movieDetails: {
    id: 'movieDetails',
    name: 'Movie Details',
    description: 'Movies Details',
    path: '/movies/:id',
    path_string: (params: { id: string }) => {
      const { id } = params
      return `/movies/${id}`
    },
    exact: true,
    isPrivate: false,
    component: React.lazy(() => import('pages/MovieDetails')),
  },
  notFound: {
    id: 'notFound',
    name: '404',
    description: '404',
    path: '*',
    path_string: () => {
      return `/404`
    },
    exact: true,
    isPrivate: false,
    component: React.lazy(() => import('pages/NotFound')),
  },
}
