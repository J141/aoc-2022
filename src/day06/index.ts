import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split('');

const solve = (input: string[], markerLength: number) => {
  const buffer = input.slice(0, markerLength - 1);
  for(let i = markerLength - 1; i < input.length; i++) {
    if([...buffer, input[i]].every((c, i, arr) => arr.indexOf(c) === i))
      return i + 1;

    buffer.shift();
    buffer.push(input[i]);
  }
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return solve(input, 4)
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return solve(input, 14);
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
