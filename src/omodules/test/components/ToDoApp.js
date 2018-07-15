import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class ToDoApp extends Component {

    constructor (props) {
        super(props)
        this.onInputChange = this.onInputChange.bind(this)
        this.onInputSubmit = this.onInputSubmit.bind(this)
        this.onListItemClick = this.onListItemClick.bind(this)
        this.deleteListItem = this.deleteListItem.bind(this)
    }

    componentDidMount () {
        this.props.addList([{ item: 'thing1' }, { item: 'thing2' }, { item: 'thing3' }])
    }

    deleteListItem (i) {
        this.setState(previousState => ({
            list: [
                ...previousState.list.slice(0, i),
                ...previousState.list.slice(i + 1)
            ]
        }))
    }

    onListItemClick (i) {
        this.setState(previousState => ({
            list: [
              ...previousState.list.slice(0, i),
              Object.assign({}, previousState.list[i], { done: !previousState.list[i].done }),
              ...previousState.list.slice(`${ i + 1 }`)
            ]
        }))
    }

    onInputSubmit (event) {
        event.preventDefault()
        this.setState(previousState => ({
            list: [...previousState.list, {item: previousState.newTodo, done: false}],
            newTodo: ''
        }))
    }

    onInputChange (event) {
        this.props.inputChange(event.target.value)
    }

    render () {
        console.log(this.props.toDoApp.newTodo)
        return (
           <div>
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
              {this.props.toDoApp.newTodo}
           </div>  
        )
    }
}

export default ToDoApp