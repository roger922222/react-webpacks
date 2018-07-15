import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import crashReporter from '../middlewares/crashReporter'

import reducer from '../reducers/index'

const configureStore = initialState => {
    const store = createStore(
        combineReducers(reducer),
        initialState,
        compose(applyMiddleware(thunk, crashReporter))
    )

    return store

}

export default configureStore
