import { ApolloClient, InMemoryCache } from "@apollo/client"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const client = new ApolloClient({
  uri: `${BASE_URL}/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
