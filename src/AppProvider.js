import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// import { Provider } from 'react-redux'
// import { GridThemeProvider } from 'styled-bootstrap-grid'
import theme from './styles/theme'
// import { ToastProvider } from 'hooks/toast'

const AppProviders = ({ children }) => (
  // <Provider store={store}>
  <ThemeProvider theme={theme}>
    {/* <GridThemeProvider gridTheme={theieme.grid}> */}
    {children}
    {/* </GridThemeProvider> */}
  </ThemeProvider>
  // </Provider>
)

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProviders
