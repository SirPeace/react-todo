import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"

import NewTaskForm from "./NewTaskForm"

describe("Test components/NewTaskForm.jsx component", () => {
  it("has input with valid placeholder", () => {
    render(<NewTaskForm />)

    expect(
      screen.getByPlaceholderText(/Нажмите '.', чтобы начать вводить текст/i),
    ).toBeInTheDocument()
  })

  it("has button", () => {
    render(<NewTaskForm />)

    expect(screen.getByText(/Добавить/i)).toBeInTheDocument()
  })

  it("has input focused when 'K' key is pressed", () => {
    render(<NewTaskForm />)

    const input = screen.getByPlaceholderText(
      /Нажмите 'K', чтобы начать вводить текст/i,
    )
    userEvent.keyboard("k")

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toBe(input)
  })

  it("makes new task on submit", () => {
    render(<App />)

    const input = screen.getByPlaceholderText(/Название задачи/i)
    userEvent.type(input, "Новая задача")
    userEvent.click(screen.getByText(/Добавить/i))

    expect(screen.getByText("Новая задача")).toBeInTheDocument()
  })
})
