import React, { Component } from "react"
import classes from "./Header.module.css"

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <h1 className={classes.Header__title}>Задачи на сегодня</h1>
      </div>
    )
  }
}
