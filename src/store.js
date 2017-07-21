import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'


export default function configureStore(initialState = {}) {
  // Add Middleware here
  const middlewares = [
 
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
  , initialState
  , compose(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  return store
}
