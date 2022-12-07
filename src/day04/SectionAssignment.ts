import { OverlapType } from "./OverlapType.js";

export class SectionAssignment {
  from: number;
  to: number;

  constructor(from: number, to: number) {
    this.from = from;
    this.to = to;
  }

  getOverlap(other: SectionAssignment): OverlapType {
    if (this.from > other.to || this.to < other.from)
      return OverlapType.None;
    else if (this.from >= other.from && this.to <= other.to)
      return OverlapType.ContainedInOther;
    else if (this.from <= other.from && this.to >= other.to)
      return OverlapType.ContainsOther;
    else
      return OverlapType.Partial;
  }
}