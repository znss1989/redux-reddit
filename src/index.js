import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import ReduxThunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPostsIfNeeded } from './actions'
// import rootReducer from './reducers'

// const loggerMiddleware = createLogger()

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     ReduxThunk, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   )
// )

// store.dispatch(selectSubreddit('reactjs'))
// store
//   .dispatch(fetchPostsIfNeeded('reactjs'))
//   .then(() => console.log(store.getState()))