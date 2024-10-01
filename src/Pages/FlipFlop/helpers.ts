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

  return numbers.sort(() => 0.5 - Math.random());
};
