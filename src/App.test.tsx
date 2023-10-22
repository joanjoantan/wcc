import { render, fireEvent, screen } from "@testing-library/react";

import GuessingGame from "./App"; // Import your GuessingGame component

describe("GuessingGame Component", () => {
  test("renders the component", () => {
    const { getByText } = render(<GuessingGame />);

    // Check if the component's elements are rendered
    expect(getByText("Number Guessing Game")).toBeInTheDocument();
    expect(getByText("Mode 1")).toBeInTheDocument();
    expect(
      screen.getByText(/User thinks of a number between 1 and 10000/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/You guess a number/i)).toBeInTheDocument();
  });

  test("Mode 1 - handles user guess correctly", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <GuessingGame />
    );
    const userThinkInput = getByPlaceholderText("Enter your think number");
    const userGuessInput = getByPlaceholderText("Enter your guess");
    const submitButton = getByRole("button", { name: "Submit Guess" });

    // Set user's think number and guess number
    fireEvent.change(userThinkInput, { target: { value: "42" } });
    fireEvent.change(userGuessInput, { target: { value: "42" } });

    // Submit the guess
    fireEvent.click(submitButton);

    // Check if the appropriate message is displayed
    expect(
      getByText("Congratulations! You guessed the user think number 42!")
    ).toBeInTheDocument();
  });

  test("Mode 2 - handles computer guess incorrectly", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <GuessingGame />
    );
    const yourGuessInput = getByPlaceholderText("Enter your guess");
    const submitButton = getByRole("button", { name: "Submit Guess" });

    // Set your guess number
    fireEvent.change(yourGuessInput, { target: { value: "42" } });

    // Submit the guess
    fireEvent.click(submitButton);

    // Check if the appropriate message is displayed
    expect(getByText("Too high! Try a lower number.")).toBeInTheDocument();
  });
});
