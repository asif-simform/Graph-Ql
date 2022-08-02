import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
  extend type Film {
    isChecked: Boolean
  }
`

export const resolvers = {
  Film: {
    isChecked: (_, args, { cache }) => {
      return !!localStorage.getItem('token')
    },
  },
}
