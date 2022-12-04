import {MatchResult} from "./matchResult.js";

export enum Shape {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors"
}

export namespace Shape {
  export function fromChar(char: string): Shape {
    switch(char) {
      case 'A': return Shape.Rock;
      case 'B': return Shape.Paper;
      case 'C': return Shape.Scissors;
      case 'X': return Shape.Rock;
      case 'Y': return Shape.Paper;
      case 'Z': return Shape.Scissors;
      default: throw 'could not convert char to Shape'
    }
  }

  export function getPoints(shape: Shape): number {
    switch(shape) {
      case Shape.Rock: return 1;
      case Shape.Paper: return 2;
      case Shape.Scissors: return 3;
    }
  }

  export function getResultAgainst(shape: Shape, otherShape: Shape) : MatchResult {
    switch(shape) {
      case Shape.Rock:
        switch(otherShape) {
          case Shape.Paper: return MatchResult.Loss;
          case Shape.Scissors: return MatchResult.Win;
          default: return MatchResult.Draw;
        }
      case Shape.Paper:
        switch(otherShape) {
          case Shape.Rock: return MatchResult.Win;
          case Shape.Scissors: return MatchResult.Loss;
          default: return MatchResult.Draw;
        }
      case Shape.Scissors:
        switch(otherShape) {
          case Shape.Paper: return MatchResult.Win;
          case Shape.Rock: return MatchResult.Loss;
          default: return MatchResult.Draw;
        }
    }
  }

  export function fromShapeAndResult(shape: Shape, result: MatchResult): Shape {
    switch(shape) {
      case Shape.Rock:
        switch(result) {
          case MatchResult.Loss: return Shape.Scissors;
          case MatchResult.Win: return Shape.Paper;
          default: return Shape.Rock;
        }
      case Shape.Paper:
        switch(result) {
          case MatchResult.Loss: return Shape.Rock;
          case MatchResult.Win: return Shape.Scissors;
          default: return Shape.Paper;
        }
      case Shape.Scissors:
        switch(result) {
          case MatchResult.Loss: return Shape.Paper;
          case MatchResult.Win: return Shape.Rock;
          default: return Shape.Scissors;
        }
    }
  }
}
