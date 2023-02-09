export interface CreateDir {
    name: string;
    userId: number;
    parentId: number | null;
    type: string;
}