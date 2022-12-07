import {FileSystemDirectory} from "./FileSystemDirectory";

export interface FileSystemEntry {
  getTotalSize(): number;
  getName(): string;
  getChildren(): FileSystemEntry[] | null;
  getParent(): FileSystemDirectory | null;
  isDirectory(): boolean;
}
