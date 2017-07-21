import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'


export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
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
