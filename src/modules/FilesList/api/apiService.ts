import { $host } from "../../../api/http"
import { IFile } from "../models/IFile";
import { CreateDir } from "../models/CreateDir";

class ApiService {
    async getFiles(userId: number, parentId: number | null) {
        const { data } = await $host.get<IFile[]>(`/files?userId=${userId}&parentId=${parentId}`)
        return data
    }

    async createDirectory(dto: CreateDir) {
        const { name, userId, parentId, type } = dto
        const { data } = await $host.post<IFile>('/files/createDir', {
            name, userId, parentId, type
        })
        return data
    }

    async uploadFile(dto: FormData) {
        const { data } = await $host.post<IFile>('/files/uploadFile', dto)
        return data
    }

    async deleteFile(fileId: number) {
        const { data } = await $host.delete<IFile>('/files/deleteFile', {
            data: {
                fileId
            }
        })
        return data
    }

    async downloadFile(fileId: number, name: string, type: string) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/files/downloadFile?fileId=${fileId}`)
            const blob = await response.blob()
            const downloadUrl = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = downloadUrl
            link.download = `${name}.${type}`
            document.body.appendChild(link)
            link.click()
            link.remove()
        } catch (e) {
            console.log(e)
        }

    }
}

export const apiService = new ApiService()