import run from "aocrunner";
import { MoveInstruction } from "./MoveInstruction.js";
import { MoveInstructionType } from "./MoveInstructionType.js";

const parseInput = (rawInput: string, moveInstructionType: MoveInstructionType): {stacks: string[][], instructions: MoveInstruction[]} => {
  const stacks: string[][] = [];
  const instructions: MoveInstruction[] = [];
  const lines = rawInput.split('\n');

  for(let i = 0; i < lines.length; i++) {
    if(lines[i].includes('[')) {
      for(let x = 0; x < lines[i].length; x += 4) {
        const crate = lines[i][x + 1];
        if(crate !== ' ') {
          const stackNumber = (x / 4) + 1;
          if(stacks[stackNumber] === undefined) {
            stacks[stackNumber] = [crate];
          } else {
            stacks[stackNumber].unshift(crate);
          }
        }
      }
    }
    else if(lines[i].startsWith('move')) {
      const parts = lines[i].split(' ');
      instructions.push({
        amount: Number.parseInt(parts[1]),
        from: Number.parseInt(parts[3]),
        to: Number.parseInt(parts[5]),
        type: moveInstructionType
      })
    }
  }

  return {stacks, instructions};
};

const moveCrates = (stacks: string[][], instruction: MoveInstruction) => {
  if(instruction.type === MoveInstructionType.OneByOne) {
    stacks[instruction.to].push(...stacks[instruction.from].splice(-instruction.amount).reverse());
  } else if(instruction.type === MoveInstructionType.MoveGroup) {
    stacks[instruction.to].push(...stacks[instruction.from].splice(-instruction.amount));
  }
}

const solve = (stacks: string[][], instructions: MoveInstruction[]) => {
  for(const instruction of instructions) {
    moveCrates(stacks, instruction);
  }

  let answer = '';
  for(let i = 1; i < stacks.length; i++) {
    answer += stacks[i][stacks[i].length - 1];
  }

  return answer;
}

const part1 = (rawInput: string) => {
  const {stacks, instructions} = parseInput(rawInput, MoveInstructionType.OneByOne);
  return solve(stacks, instructions);
};

const part2 = (rawInput: string) => {
  const {stacks, instructions} = parseInput(rawInput, MoveInstructionType.MoveGroup);
  return solve(stacks, instructions)
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
