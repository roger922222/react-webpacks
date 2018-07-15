import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import Input from '../components/Input'
import { inputChange, addList } from '../reducer'

@connect(state => ({
    toDoApp: state.toDoApp
}), dispatch => ({ dispatch }))

class ToDoApp extends Component {

    constructor (props) {
        super(props)
        this.onInputChange = this.onInputChange.bind(this)
        this.onInputSubmit = this.onInputSubmit.bind(this)
        this.onListItemClick = this.onListItemClick.bind(this)
        this.deleteListItem = this.deleteListItem.bind(this)
    }

    componentDidMount () {
        addList(this.props.dispatch)([{ item: 'thing1' }, { item: 'thing2' }, { item: 'thing3' }])
    }

    deleteListItem (i) {
        addList(this.props.dispatch)({index: i, add: false})
    }

    onListItemClick (i) {
        addList(this.props.dispatch)({index: i, add: true})
    }

    onInputSubmit (event) {
        event.preventDefault()
        addList(this.props.dispatch)([{ item: this.props.toDoApp.newToDo, done: false}]).then(() => {
            inputChange(this.props.dispatch)('')
        })
    }

    onInputChange (event) {
        inputChange(this.props.dispatch)(event.target.value)
    }

    render () {
        return (
           <div style={{fontSize: '30px', color: 'red'}}>
               一个简单的增删改查，没有写样式的，只是一个demo，怎么样让你去写业务代码，不以写样式为主
              <List 
                  listItems={this.props.toDoApp.list} 
                  onClick={this.onListItemClick}
                  onDelete={this.deleteListItem}
              />
              <Input 
                  value={this.props.toDoApp.newTodo}  
                  onChange={event => this.onInputChange(event)}
                  onSumbit={elem => this.onInputSubmit(elem)}
              />
              {this.props.toDoApp.newToDo}
           </div>  
        )
    }
}

export default ToDoApp