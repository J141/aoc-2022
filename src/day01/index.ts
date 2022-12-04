import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split(/\r?\n/).map(line => Number.parseInt(line));

const getCaloriesPerElf = (input: number[]): number[] => {
  const caloriesPerElf: number[] = [];
  let writeIndex = 0;
  for(const line of input) {
    if(Number.isNaN(line) && caloriesPerElf[writeIndex] > 0) {
      writeIndex++;
      continue;
    }

    caloriesPerElf[writeIndex] = (caloriesPerElf[writeIndex] || 0) + line;
  }

  return caloriesPerElf;
}

const part1 = (rawInput: string) => {
  const caloriesPerElf = getCaloriesPerElf(parseInput(rawInput));
  return Math.max(...caloriesPerElf);
};

const part2 = (rawInput: string) => {
  const caloriesPerElf = getCaloriesPerElf(parseInput(rawInput)).sort((a, b) => b - a);

  return caloriesPerElf.slice(0, 3).reduce((total, n) => total + n, 0);
};

run({
  part1: {
    tests: [
      {
        input: `5\n10\n15\n\n\n5\n8\n18\n\n17\n6\n4\n\n8\n5\n14`,
        expected: 31,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `5\n10\n15\n\n\n5\n8\n18\n\n17\n6\n4\n\n8\n5\n14`,
        expected: 88,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
