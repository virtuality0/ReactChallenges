import { FileObject } from "@/interfaces/FileObject";

export const Explorer : FileObject =   
    {
      "id" : 1,
      "name" : "root", 
      "isFolder" : true, 
      "children" : [
        {
          "id" : 2,
          "name" : "package.json",
          "isFolder" : false, 
          "children" : []
        }, 
        {
          "id" : 3,
          "name" : "app",
          "isFolder" : true, 
          "children" : [
          {
            "id" : 4, 
            "name" : "index.js", 
            "isFolder" : false, 
            "children" : []
          },
        ]
        },
      ]
    }
