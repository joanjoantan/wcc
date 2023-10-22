import React, { useState } from "react";

import { generateRandomNumber, checkNumber } from "./utils/Features";
import { messageCongratulations } from "./utils/Messages";

const App: React.FC = () => {
  const minNumber = 1;
  const maxNumber = 10000;

  // State specific to Mode 1
  const [userGuess, setUserGuess] = useState("");
  const [userThink, setUserThink] = useState("");
  const [message, setMessage] = useState("");

  // State specific to Mode 2
  const [Mode2, setMode2] = useState(false);
  const [computerMysteryNumber, setComputerMysteryNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );
  const [yourGuess, setYourGuess] = useState("");
  const [messageModeTwo, setMessageModeTwo] = useState("");

  // Mode 2: Define a state variable to track the visibility of the computerMysteryNumber
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleGuess = () => {
    if (Mode2) {
      handleModeTwoGuess();
    } else {
      handleModeOneGuess();
    }
  };

  const handleModeOneGuess = () => {
    const guess = parseInt(userGuess, 10);
    const think = parseInt(userThink, 10);

    const specialMessage = "user thinks number";

    const result = checkNumber(guess, think, specialMessage);
    setMessage(result);

    if (result.includes(messageCongratulations)) {
      setMode2(true);
    }
  };

  const handleModeTwoGuess = () => {
    const guess = parseInt(yourGuess, 10);
    const think = computerMysteryNumber;

    const specialMessage = "computer random number";

    const result = checkNumber(guess, think, specialMessage);
    setMessageModeTwo(result);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setStateFn: React.Dispatch<React.SetStateAction<string>>,
    clearMessageFn?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    clearMessageFn && clearMessageFn(""); // Clear the message if the clearMessageFn is provided

    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= minNumber && value <= maxNumber) {
      setStateFn(value.toString());
    } else {
      setStateFn("");
    }
  };

  const handleThinkNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setUserThink, setMessage);
  };

  const handleYourGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setYourGuess, setMessageModeTwo);
  };

  const handleGuessNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setMode2(false);
    setUserGuess(e.target.value);
  };

  // Create a function to toggle the visibility
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <h2>Mode 1</h2>
      <p>
        User thinks of a number between {minNumber} and {maxNumber}:{" "}
        <input
          type="number"
          value={userThink}
          onChange={handleThinkNumberChange}
          placeholder="Enter your think number"
        />
      </p>

      <p>
        You guess a number:{" "}
        <input
          type="number"
          value={userGuess}
          onChange={handleGuessNumberChange}
          placeholder="Enter your guess"
        />
      </p>

      <h3>{message}</h3>

      <button onClick={handleGuess}>Submit Guess</button>

      <hr />

      {Mode2 && (
        <>
          <h2>Mode 2</h2>
          <p>
            The computer generates a random number{" "}
            <button onClick={toggleTextVisibility}>
              Toggle computer mystery number
            </button>{" "}
            {isTextVisible && <i>{computerMysteryNumber}</i>}, you guess a
            number between {minNumber} and {maxNumber}:
          </p>
          You guess a number:{" "}
          <input
            type="number"
            value={yourGuess}
            onChange={handleYourGuessChange}
            placeholder="Enter your guess"
          />
          <h3>{messageModeTwo}</h3>
          <button onClick={handleGuess}>Submit Guess</button>
        </>
      )}
    </div>
  );
};

export default App;
