import React, { Component } from "react"
import classes from "./TasksList.module.css"

import Task from "../Task/Task"

class TasksList extends Component {
  render() {
    return (
      <ul className={classes.tasksList}>
        {this.props.tasks.map(task => (
          <li key={task.id}>
            <Task task={task} onDelete={this.props.deleteTask}>
              {task.text}
            </Task>
          </li>
        ))}
      </ul>
    )
  }
}

export default TasksList
