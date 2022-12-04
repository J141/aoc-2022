import {Shape} from "./shape.js";
import {MatchResult} from "./matchResult.js";

export class Round {
  public opponentShape: Shape;
  public userShape: Shape;

  public constructor(opponentShape: Shape, userShape: Shape) {
    this.opponentShape = opponentShape;
    this.userShape = userShape;
  }

  public getResult(): MatchResult {
    return Shape.getResultAgainst(this.userShape, this.opponentShape);
  }

  public getPoints(): number {
    return MatchResult.getPoints(this.getResult()) + Shape.getPoints(this.userShape);
  }
}
