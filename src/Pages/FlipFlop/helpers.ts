export const generateRandomArray = (length: number): number[] => {
  const numbers: number[] = [];
  const minNumber = 1;
  const maxNumber = 50;

  for (let i = 1; numbers.length < length; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
    if (!numbers.includes(randomNumber))
      numbers.push(randomNumber, randomNumber); // Push each number twice
  }

  return numbers.sort(() => 0.5 - Math.random());
};
