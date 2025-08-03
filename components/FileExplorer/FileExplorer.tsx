"use client";
import { useState } from "react";
import { FileObject } from "../../interfaces/FileObject";
import { Folder } from "./Folder";
import { Explorer } from "../../data/Explorer";

export const FileExplorer = () => {
  const [explorer, setExplorer] = useState<FileObject>(Explorer);
  return <Folder explorer={explorer} setExplorer={setExplorer} />;
};
