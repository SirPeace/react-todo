import React, { Component } from "react"
import classes from "./Task.module.css"

import TrashIcon from "../Icons/TrashIcon"

export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      iconColor: "#333",
    }
  }

  setIconColor(color) {
    this.setState(state => ({ ...state, iconColor: color }))
  }

  render() {
    return (
      <div className={classes.task}>
        <span>{this.props.task.text}</span>
        <button
          className={classes.task__deleteBtn}
          onMouseDown={() => this.setIconColor("crimson")}
          onMouseUp={() => this.setIconColor("#333")}
          onClick={() => this.props.onDelete(this.props.task.id)}
        >
          <TrashIcon color={this.state.iconColor} size={20} />
        </button>
      </div>
    )
  }
}
