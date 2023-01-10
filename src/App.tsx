import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { Language } from './components/header/Language'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
