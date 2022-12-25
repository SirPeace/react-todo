import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Testing components/Header.jsx component", () => {
  it("has a valid title", () => {
    render(<Header />)
    expect(screen.getByText(/Задачи на сегодня/i)).toBeInTheDocument()
  })
})
