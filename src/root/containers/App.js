import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoadingWithContent from '../components/LoadingWithContent'

@connect(state => {
    return {
        showLoading: state.showLoading > 0
    }
}, dispatch => ({ dispatch }))

class App extends Component {
    constructor (props) {
        super(props)
    }

    renderLoading () {
        if (!this.props.showLoading) return null
        return <LoadingWithContent />
    }

    render () {
        return (
            <div>
                { this.props.children }
                { this.renderLoading() }
            </div>
        )
    }
}

export default App