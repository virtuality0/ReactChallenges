"use client";
import { FileObject } from "@/interfaces/FileObject";
import { SetStateAction, Dispatch, useState } from "react";

interface FolderComponentProps {
  explorer: FileObject,
  setExplorer :  Dispatch<SetStateAction<FileObject>>
}

export const Folder = ({ explorer }: FolderComponentProps) => {
  const [expand, setExpand] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const [clickedButton, setClickedButton] = useState("")

  const handleNewItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setNewItem((prev) => !prev);
  };

  if (explorer.isFolder) {
    return (
      <div className="flex-col gap-y-2 px-2 py-2">
        <div
          onClick={() => {
            setExpand((prev) => !prev);
          }}
          className="flex gap-x-2 px-2 py-2"
        >
          <span> {explorer.isFolder ? "🗂️" : "📄"} </span>
          <span> {explorer.name} </span>
          <div>
            <button onClick={handleNewItem} className="bg-gray-600 px-1 py-1">
              Folder +
            </button>
            <button onClick={handleNewItem} className="px-1 py-1 bg-gray-600">
              File +
            </button>
          </div>
        </div>
        {newItem ? (
          <input
            onKeyDown={(e : React.KeyboardEvent<HTMLInputElement>) => {
              if(e.key === "enter"){
                e.preventDefault() 
                explorer.children?.push({
                  name : e.target.value,
                  isFolder : clickedButton === "folder",
                  id : 
                })
              }
            }}
            autoFocus 
            onBlur={() => {setNewItem(false)}}
            className="bg-gray-600 p-2"
            type="text"
            placeholder="name"
          ></input>
        ) : null}
        {expand ? (
          <div>
            {explorer.children?.map((item) => (
              <div key={item.id}>
                <Folder explorer={item} />
                {/* Calling explorer = item because now item is the new explorer and hence we call this recursively  */}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setExpand((prev) => !prev);
        }}
        className="flex gap-x-2 px-2 py-2"
      >
        <span> {explorer.isFolder ? "🗂️" : "📄"} </span>
        <span> {explorer.name} </span>
      </div>
    );
  }
};
