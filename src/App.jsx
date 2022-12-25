import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import NewTaskForm from "./components/NewTaskForm/NewTaskForm"
import TasksList from "./components/TasksList/TasksList"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
          id: Date.now(),
          text: "Первая задача. Нажми на меня, чтобы удалить",
        },
      ],
    }
  }

  componentDidMount() {
    document.title = "Задачи на " + new Date().toLocaleDateString("ru-RU")
  }

  addNewTask = taskText => {
    this.setState(state => ({
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text: taskText,
        },
      ],
    }))
  }

  deleteTask = taskId => {
    this.setState(state => ({
      ...state,
      tasks: state.tasks.filter(task => task.id !== +taskId),
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="app">
            <NewTaskForm addNewTask={this.addNewTask} />
            <TasksList tasks={this.state.tasks} deleteTask={this.deleteTask} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
