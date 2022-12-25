import { render, screen } from "@testing-library/react"
import TasksList from "./TasksList"

describe("Test components/TasksList.jsx component", () => {
  it("is rendered", () => {
    render(<TasksList />)
    screen.getByText(/TasksList/i)
  })
})
