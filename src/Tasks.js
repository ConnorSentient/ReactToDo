import React, { Component } from 'react'

class Tasks extends Component {
    create = item => {
        return (
            <li key={item.key} onClick={() => this.props.del(item.key)}><div>{item.text}</div></li>
        )
    }
    render() {
        let taskEntry = this.props.items
        let listTasks = taskEntry.map(this.create)
        return (
            <ul>{listTasks}</ul>
        )
    }
}

export default Tasks