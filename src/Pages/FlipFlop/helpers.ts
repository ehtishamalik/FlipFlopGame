export const generateRandomArray = (length: number): number[] => {
  const numbers: number[] = [];
  const minNumber = 1;
  const maxNumber = 50;

  for (let i = 1; numbers.length < length; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
    if (!numbers.includes(randomNumber))
    numbers.push(randomNumber, randomNumber); // Push each number twice
  }

  // Trim the array if it exceeds the desired length due to the double push
  numbers.length = length;

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
  }

  return numbers;
};
