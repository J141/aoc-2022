import {FileSystemEntry} from "./FileSystemEntry.js";
import {FileSystemDirectory} from "./FileSystemDirectory.js";

export class FileSystemFile implements FileSystemEntry {
  private parent: FileSystemDirectory;
  private name: string;
  private fileSize: number;

  constructor(parent: FileSystemDirectory, name: string, fileSize: number) {
    this.parent = parent;
    this.name = name;
    this.fileSize = fileSize;
  }

  getChildren(): FileSystemEntry[] | null {
    return null;
  }

  getName(): string {
    return this.name;
  }

  getParent(): FileSystemDirectory {
    return this.parent;
  }

  getTotalSize(): number {
    return this.fileSize;
  }

  isDirectory(): boolean {
    return false;
  }

}
