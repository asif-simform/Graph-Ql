import { ApolloClient } from '@apollo/client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-boost'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { API_URL } from 'config/env'
import { typeDefs, resolvers } from 'config/resolvers'

const httpLink = new HttpLink({
  uri: API_URL,
  // Additional fetch options like `credentials` or `headers`
  headers: {
    authorization: 'Bearer my-jwt-token',
  },
})

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )

    if (networkError) console.log(`[Network error]: ${networkError}`)
  }
)

const link = ApolloLink.from([httpLink, errorLink])

export const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link,
  resolvers,
  typeDefs,
})

const data = {
  isLoggedIn: !!localStorage.getItem('token'),
}

cache.writeData({ data })

client.onResetStore((): any => cache.writeData({ data }))
