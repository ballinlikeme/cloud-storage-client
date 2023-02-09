import {$host} from "../../../api/http"
import {IFile} from "../models/IFile";
import {CreateDir} from "../models/CreateDir";

class ApiService {
    async getFiles(userId: number, parentId: number | null) {
        const {data} = await $host.get<IFile[]>(`/files?userId=${userId}&parentId=${parentId}`)
        return data
    }

    async createDirectory(dto: CreateDir) {
        const {name, userId, parentId, type} = dto
        const {data} = await $host.post<IFile>('/files/createDir', {
            name, userId, parentId, type
        })
        return data
    }

    async uploadFile(dto: FormData) {
        const {data} = await $host.post<IFile>('/files/uploadFile', dto)
        return data
    }

    async deleteFile(fileId: number) {
        const {data} = await $host.delete<IFile>('/files/deleteFile', {
            data: {
                fileId
            }
        })
        return data
    }

    async downloadFile(fileId: number) {
        const {data} = await $host.get(`/files/downloadFile?fileId=${fileId}`, {
            headers: {
                "content-type": "application/pdf"
            }
        })
        return data
    }
}

export const apiService = new ApiService()