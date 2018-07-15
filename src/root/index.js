import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './containers/Root'
import configureStore from './store/configureStore'


injectTapEventPlugin()

const store = configureStore()
window.store = store

const syncHistory = syncHistoryWithStore(hashHistory, store)

render(
    <Root store={store} history={syncHistory}></Root>,
    document.getElementById('root')
)
