import React from 'react'
import Parent from './src/components/parent/Parent'

import { Provider } from 'react-redux'
import store from './store/store'

const App = (props) => (<Provider store={store}><Parent {...props}/></Provider>)

export default App


