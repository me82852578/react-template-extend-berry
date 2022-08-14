import React from 'react'
import { useSelector } from 'react-redux'

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'

// routing
import Routes from 'routes'

// defaultTheme
import themes from 'themes'
import NavigationScroll from 'layout/NavigationScroll'

// project imports
// import NavigationScroll from 'layout/NavigationScroll'

// ==============|| APP ||============== //

function App() {
  const customization = useSelector((state) => state.customization)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
