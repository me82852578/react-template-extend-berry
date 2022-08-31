import React from 'react'
import { useSelector } from 'react-redux'

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'

// defaultTheme
import themes from 'themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RoutesWrapped from 'routes'

// project imports
// import NavigationScroll from 'layout/NavigationScroll'

// ==============|| APP ||============== //

function App() {
  const queryClient = new QueryClient()
  const customization = useSelector((state) => state.customization)

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <RoutesWrapped />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  )
}

export default App
