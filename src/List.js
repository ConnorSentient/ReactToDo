import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.props.add}>
                        <input placeholder="New Task" ref={this.props.inputElement} value={this.props.current.text} onChange={this.props.input}/>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default List
