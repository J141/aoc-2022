import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split('\n');

const getScore = (char: string) => {
  //thankfully, we can make use of the fact that a-z and A-Z are awarded points in alphabetical order.
  //So we'll convert the char to its ASCII identifier, and then do a bit of math to get the correct score.
  const charCode = char.charCodeAt(0);
  return charCode > 90 ? charCode - 96 : charCode - 38;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const itemsByCompartment = input.map<[string[], string[]]>(line => [
    line.slice(0, line.length / 2).split(''),
    line.slice(line.length / 2).split('')
  ])
  const duplicateTypes = itemsByCompartment.map(entry => entry[0].find(x => entry[1].indexOf(x) !== -1));
  const sum = duplicateTypes.reduce((total, char) => total + getScore(char!), 0);

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const groupItemTypes = [];
  for (let i = 0; i < input.length; i += 3) {
    const lines = input.slice(i, i + 3).map(x => x.split(''));
    groupItemTypes.push(lines[0].find(x => lines[1].indexOf(x) !== -1 && lines[2].indexOf(x) !== -1));
  }
  const sum = groupItemTypes.reduce((total, char) => total + getScore(char!), 0);

  return sum;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
