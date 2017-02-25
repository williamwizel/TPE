import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App.jsx'

import reduce from './reducer/reduce.js'
let store = createStore(reduce)

class RootApp extends React.Component {
  render () {
    return (
      <Provider store={store} style={{ height: "100%", width: "100%" }}>
        <App />
      </Provider>
    );
  }
}

render(<RootApp/>, document.getElementById('app'));
