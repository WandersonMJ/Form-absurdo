import React from 'react'
import { Helmet } from 'react-helmet'
import MainRoutes from './routes/router'

import AppProviders from './AppProvider'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <AppProviders>
        <GlobalStyle />
        <MainRoutes />
      </AppProviders>
    </>
  )
}

export default App
