import React, { Fragment } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from 'config/graphql'
import { Routes } from 'app/Routes'
import ErrorBoundary from 'components/ErrorBoundary'

export const App: React.FC = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </ErrorBoundary>
    </Fragment>
  )
}
