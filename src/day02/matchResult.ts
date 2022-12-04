export enum MatchResult {
  Loss = "loss",
  Draw = "draw",
  Win = "win"
}

export namespace MatchResult {
  export function getPoints(matchResult: MatchResult): number {
    switch (matchResult) {
      case MatchResult.Win: return 6;
      case MatchResult.Draw: return 3;
      default: return 0;
    }
  }

  export function fromChar(char: string): MatchResult {
    switch(char) {
      case 'X': return MatchResult.Loss;
      case 'Y': return MatchResult.Draw;
      case 'Z': return MatchResult.Win;
      default: throw 'could not parse char to MatchResult';
    }
  }
}
