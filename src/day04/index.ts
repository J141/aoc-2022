import run from "aocrunner";
import { SectionAssignment } from "./SectionAssignment.js";
import { OverlapType } from "./OverlapType.js";

const parseInput = (rawInput: string): [SectionAssignment, SectionAssignment][] => {
  const lines = rawInput.split('\n');
  const assignmentPairs: [SectionAssignment, SectionAssignment][] = [];
  
  for(const line of lines) {
    const assignments = line.split(',').flatMap(x => x.split('-').flatMap(x => Number.parseInt(x)));
    assignmentPairs.push([new SectionAssignment(assignments[0], assignments[1]), new SectionAssignment(assignments[2], assignments[3])]);
  }

  return assignmentPairs;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const answer = input.reduce((counter, assignmentPair) => {
    const overlap = assignmentPair[0].getOverlap(assignmentPair[1]);
    if(overlap === OverlapType.ContainsOther || overlap === OverlapType.ContainedInOther)
      counter++;
    return counter;
  }, 0);

  return answer;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const answer = input.reduce((counter, assignmentPair) => {
    const overlap = assignmentPair[0].getOverlap(assignmentPair[1]);
    if(overlap !== OverlapType.None)
      counter++;
    return counter;
  }, 0);

  return answer;
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
