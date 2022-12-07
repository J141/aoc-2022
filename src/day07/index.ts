import run from "aocrunner";
import {FileSystemDirectory} from "./FileSystemDirectory.js";
import {FileSystemFile} from "./FileSystemFile.js";
import {FileSystemEntry} from "./FileSystemEntry";

const parseInputToFileSystemTree = (rawInput: string) => {
  const lines = rawInput.split('\n');
  const rootDirectory = new FileSystemDirectory('/', null);
  let currentDirectory: FileSystemDirectory = rootDirectory;
  let currentParent: FileSystemDirectory | null | undefined = undefined;

  for (const line of lines) {
    if (line.startsWith('$ cd')) {
      const dir = line.split(' ')[2];
      if (dir == '..') {
        currentDirectory = currentParent!;
        currentParent = currentDirectory?.getParent();
      } else if (dir !== '/') {
        currentParent = currentDirectory || null;
        currentDirectory = new FileSystemDirectory(dir, currentDirectory || null);
        currentParent?.addChild(currentDirectory);
      }
    } else if (!line.startsWith('$') && !line.startsWith('dir')) {
      const [fileSize, fileName] = line.split(' ');
      currentDirectory?.addChild(new FileSystemFile(currentDirectory, fileName, Number.parseInt(fileSize)))
    }
  }

  return rootDirectory;
};

const sumDirectoriesWithMaxSizeRecursive = (node: FileSystemEntry, maxSize: number): number => {
  let runningTotal = 0;
  const nodeSize = node.getTotalSize();
  if (nodeSize <= maxSize)
    runningTotal += nodeSize;

  const children = node.getChildren();
  if (Array.isArray(children) && children.length > 0) {
    for (const child of children)
      if (child.isDirectory()) {
        const childSize = sumDirectoriesWithMaxSizeRecursive(child, maxSize);
        runningTotal += childSize;
      }
  }

  return runningTotal;
}

const getSmallestDirectoryWithMinSizeRecursive = (node: FileSystemEntry, minSize: number, smallestDirectoryFound: FileSystemEntry | undefined): FileSystemEntry => {
  const nodeSize = node.getTotalSize();
  if(nodeSize >= minSize && nodeSize < (smallestDirectoryFound?.getTotalSize() || nodeSize + 1)) {
    smallestDirectoryFound = node;
  }

  const children = node.getChildren();
  if(Array.isArray(children) && children.length > 0)
    for (const child of children)
      if(child.isDirectory())
        smallestDirectoryFound = getSmallestDirectoryWithMinSizeRecursive(child, minSize, smallestDirectoryFound);

  return smallestDirectoryFound!;
}

const part1 = (rawInput: string) => {
  const input = parseInputToFileSystemTree(rawInput);

  return sumDirectoriesWithMaxSizeRecursive(input, 100000);
};

const part2 = (rawInput: string) => {
  const input = parseInputToFileSystemTree(rawInput);
  const usedSpace = input.getTotalSize();
  const freeSpace = 70000000 - usedSpace;
  const spaceNeeded = 30000000 - freeSpace;

  const smallestDirectoryToDelete = getSmallestDirectoryWithMinSizeRecursive(input, spaceNeeded, undefined);

  return smallestDirectoryToDelete.getTotalSize();
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
