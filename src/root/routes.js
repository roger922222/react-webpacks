import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import test from 'src/omodules/test/route'

export default {
    path: '/',
    component: App,
    childRoutes: [
        test
    ]
}