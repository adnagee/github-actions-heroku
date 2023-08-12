// add one jest test
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("renders calculator title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple Calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test("performs squaring correctly", () => {
  render(<App />);
  const numInput = screen.getByLabelText("Number");
  const calculateButton = screen.getByText("Calculate Square");

  fireEvent.change(numInput, { target: { value: "3" } });
  fireEvent.click(calculateButton);

  const resultElement = screen.getByText("Result: 9");
  expect(resultElement).toBeInTheDocument();
});
