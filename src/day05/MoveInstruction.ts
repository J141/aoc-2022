import { MoveInstructionType } from "./MoveInstructionType.js";

export interface MoveInstruction {
  amount: number;
  from: number;
  to: number;
  type: MoveInstructionType
}