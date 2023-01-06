import React, { Component } from "react"
import classes from "./Header.module.css"

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.container}>
          <h1 className={classes.title}>Задачи на сегодня</h1>
        </div>
      </div>
    )
  }
}
