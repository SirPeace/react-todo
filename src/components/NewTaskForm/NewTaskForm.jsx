import React, { Component } from "react"
import classes from "./NewTaskForm.module.css"

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)

    this.searchKey = "K"

    this.inputRef = null
    this.setInputRef = el => (this.inputRef = el)

    this.keyboardListener = null

    this.state = {
      newTask: "",
      placeholder: "Новая задача",
    }
  }

  componentDidMount() {
    this.keyboardListener = document.addEventListener("keypress", evt => {
      if (evt.key === this.searchKey.toLowerCase()) this.inputRef?.focus()
    })

    if (navigator?.maxTouchPoints === 0) {
      this.setState(state => ({
        ...state,
        placeholder: `Нажмите '${this.searchKey}', чтобы начать вводить задачу...`,
      }))
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyboardListener)
  }

  onSubmit(evt) {
    evt.preventDefault()

    if (this.state.newTask.length > 0) {
      this.props.addNewTask(this.state.newTask)
      this.setState(state => ({ ...state, newTask: "" }))
    }
  }

  render() {
    return (
      <form
        action="/"
        onSubmit={e => this.onSubmit(e)}
        className={classes.form}
      >
        <input
          type="text"
          className={classes.input}
          ref={el => this.setInputRef(el)}
          value={this.state.newTask}
          onInput={e =>
            this.setState({ ...this.state, newTask: e.target.value })
          }
          placeholder={this.state.placeholder}
        />
        <button type="submit" className={classes.button}>
          Добавить
        </button>
      </form>
    )
  }
}
