export interface UploadFile {
    name: string;
    userId: string;
    parentId?: string;
    file: File,
}