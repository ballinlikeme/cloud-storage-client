import {$host} from "../http";
import {IFile} from "../models/IFile";

class FileService {

    async getFiles(userId: number) {
        const {data} = await $host.get(`/file?userId=${userId}`)
        return data
    }

}

export default new FileService()