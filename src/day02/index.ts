import run from "aocrunner";
import {Round} from "./round.js";
import {Shape} from "./shape.js";
import {MatchResult} from "./matchResult.js";

const parseInput = (rawInput: string) => rawInput.split('\n').map(line => [line[0], line[2]]);

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map(x => new Round(Shape.fromChar(x[0]), Shape.fromChar(x[1])))
  return input.reduce((total, round) => total + round.getPoints(), 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).map<[Shape, MatchResult]>(x => [Shape.fromChar(x[0]), MatchResult.fromChar(x[1])])
  return input.reduce<number>((total, entry) => {
    const userShape = Shape.fromShapeAndResult(entry[0], entry[1])

    return total + Shape.getPoints(userShape) + MatchResult.getPoints(entry[1]);
  }, 0);
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
