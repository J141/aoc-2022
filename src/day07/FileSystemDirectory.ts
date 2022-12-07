import {FileSystemEntry} from "./FileSystemEntry.js";

export class FileSystemDirectory implements FileSystemEntry {
  private name: string;
  private parent: FileSystemDirectory | null;
  private totalSize: number | undefined = undefined;
  private children: FileSystemEntry[] = [];

  public constructor(name: string, parent: FileSystemDirectory | null) {
    this.name = name;
    this.parent = parent;
  }

  getChildren(): FileSystemEntry[] {
    return [...this.children];
  }

  getName(): string {
    return this.name;
  }

  getParent(): FileSystemDirectory | null {
    return this.parent;
  }

  getTotalSize(): number {
    if(this.totalSize === undefined)
      this.totalSize = this.children.reduce((total, entry) => total + entry.getTotalSize(), 0);

    return this.totalSize;
  }

  addChild(child: FileSystemEntry) {
    if(this.children.some(x => x.getName() == child.getName()))
      throw "entry already exists";

    this.children.push(child)
  }

  isDirectory(): boolean {
    return true;
  }

}
