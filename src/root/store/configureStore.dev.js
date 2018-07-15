import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from '../reducers/index'
import DevTools from '../containers/DevTool'

const configureStore = initialState => {
    const store = createStore(
        combineReducers(reducer),
        initialState,
        compose(applyMiddleware(thunk, createLogger()), DevTools.instrument())
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store

}

export default configureStore
