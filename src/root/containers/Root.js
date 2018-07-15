import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import routes from '../routes'

export default class Root extends Component {
    render () {
        const { store, history } = this.props
        return (
            <Provider store={store}>
                <Router onUpdate={() => window.scrollTo(0, 0)} history={history} routes={routes} />
            </Provider>
        )
    }
}

Root.PropTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
