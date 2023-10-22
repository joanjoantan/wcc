import {
  messageInvalid,
  messageTooHigh,
  messageTooLow,
  messageCongratulations,
} from "./Messages";

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkNumber = (
  guess: number,
  think: number,
  specialMessage: string
) => {
  if (isNaN(guess)) {
    return messageInvalid;
  } else if (guess === think) {
    return `${messageCongratulations} ${specialMessage} ${think}!`;
  } else if (guess < think) {
    return messageTooLow;
  } else {
    return messageTooHigh;
  }
};
