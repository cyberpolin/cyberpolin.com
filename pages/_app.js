import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client"
import { ReCaptchaProvider } from "next-recaptcha-v3"
import client from "../lib/apollo-client"

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ReCaptchaProvider>
        <Component {...pageProps} />
      </ReCaptchaProvider>
    </ApolloProvider>
  )
}

export default MyApp;
