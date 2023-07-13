import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import AuthProvider from "./providers/auth.jsx";
import {SnackbarProvider} from 'notistack'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SnackbarProvider
          autoHideDuration={3000}
          maxSnack={5}
          anchorOrigin={{vertical: "top", horizontal: 'right'}}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <AuthProvider>
                <Routes/>
                </AuthProvider>
        </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>,
)
