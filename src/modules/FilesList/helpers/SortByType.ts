import {IFile} from "../models/IFile";

export const sortByType = (files: IFile[]): IFile[] => {
    let result: IFile[] = []

    files.filter(file => file.type === "dir").forEach(item => {
        result.push(item)
    })
    files.filter(file => file.type !== "dir").forEach(item => {
        result.push(item)
    })

    return result
}