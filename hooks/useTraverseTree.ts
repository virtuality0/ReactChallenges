import { FileObject } from "../interfaces/FileObject";

export const useTraverseTree = () => {
  function insertNode(
    tree: FileObject,
    folderId: number,
    item: number,
    isFolder: boolean,
  ) {
    if (tree.id === folderId && tree.isFolder) {
      tree?.children?.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
      });
    }

    return tree;
  }

  return { insertNode };
};
