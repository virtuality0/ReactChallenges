export interface FileObject {
  id: number;
  name: string;
  isFolder: boolean;
  children?: FileObject[];
}
