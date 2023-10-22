# Number Guessing Game

This is a simple Number Guessing Game implemented in React. The game has two modes: Mode 1 where the user thinks of a number, and Mode 2 where the computer generates a random number for the user to guess.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Assumptions Made](#assumptions-made)
- [Further Improvements](#further-improvements)

## Features

- Two game modes: user thinks of a number and computer-generated mystery number.
- Real-time feedback on the guess (too high, too low, correct).
- Messages to inform the player of the game's status.
- Easy-to-use input fields to enter guesses and thought numbers.

### Technologies Used

The Number Guessing Game is built using the following technologies:

- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/joanjoantan/wcc.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd wcc

   ```

3. Install the project dependencies:

   ```bash
   yarn install

   ```

### Usage

Start the development server:

```bash
yarn start
```

Open your web browser and go to http://localhost:3000 to play the game.

### Running Tests

To run tests for the app, use the following command:

```bash
yarn test
```

### Assumptions Made

- The user is responsible for entering valid input.
- In Mode 1, the user thinks of a number within the specified range.
- In Mode 2, the user inputs valid guesses within the specified range.

### Further Improvements

Given more time, here are some potential improvements that could be made to the app:

1. User Experience Enhancements:

- Improve the overall user interface, including styling and animations to make the game more visually appealing.
- Add sound effects or background music to enhance the gaming experience.
- Provide more user-friendly instructions and tooltips for better guidance.

2. Mobile Responsiveness:

- Ensure that the game is responsive and works well on mobile devices, expanding its accessibility.

3. Advanced Computer Player:

- In Mode 2, enhance the computer-generated number by implementing various algorithms to make it smarter and more challenging for the player.
