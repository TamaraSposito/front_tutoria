import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/details'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
