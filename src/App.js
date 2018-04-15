import React from 'react'
import { Dashboard } from './containers/dashboard'
import { AppProvider } from './providers'

const App = (
  <AppProvider value={ this.state }>
    <Dashboard />
  </AppProvider>
)

export default App
