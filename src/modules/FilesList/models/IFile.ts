export interface IFile {
    id: number;
    name: string;
    size: number;
    type: string;
    path: string;
    userId: number;
    parentId: number | null;
    children: number[];
    updatedAt: string;
}