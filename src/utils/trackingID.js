const getRandomCharacter = () => {
  const numbersAndLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];

  let randomCharacter =
    numbersAndLetters[Math.floor(Math.random() * numbersAndLetters.length)];
  return randomCharacter;
};

export const generateTrackingId = () => {
  let trackingIdGenerator = [];
  for (let i = 0; i <= 13; i++) {
    if (i === 4 || i === 9) {
      trackingIdGenerator[i] = "-";
    } else {
      trackingIdGenerator[i] = getRandomCharacter();
    }
  }
  let trackingId = trackingIdGenerator.join("");
  return trackingId;
};



