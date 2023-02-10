import { addNewFile, deleteFile, fetchFiles, fetchFilesError, fetchFilesSuccess } from "./store"
import { AppDispatch } from "../../../store/store";
import { apiService } from "../api/apiService";
import { AxiosError } from "axios";
import { CreateDir } from "../models/CreateDir";
import { UploadFile } from "../models/UploadFile";

export const getFiles = (userId: number, parentId: number | null) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFiles())
        const files = await apiService.getFiles(userId, parentId)
        dispatch(fetchFilesSuccess(files))
    } catch (e: AxiosError | any) {
        dispatch(fetchFilesError([e.response.data.message]))
    }
}

export const createDir = (dto: CreateDir) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFiles())
        const newFolder = await apiService.createDirectory(dto)
        dispatch(addNewFile(newFolder))
    } catch (e: AxiosError | any) {
        dispatch(fetchFilesError([e.response.data.message]))
    }
}

export const uploadFile = (dto: UploadFile) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFiles())
        const formData = new FormData()
        formData.append("file", dto.file)
        console.log(dto)
        if (dto.parentId) {
            formData.append('parentId', String(dto.parentId))
        }
        formData.append("name", dto.name)
        formData.append("userId", String(dto.userId))

        const newFile = await apiService.uploadFile(formData)
        dispatch(addNewFile(newFile))
    } catch (e: AxiosError | any) {
        console.log(e)
    }
}

export const removeFile = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchFiles())
        const file = await apiService.deleteFile(id)
        dispatch(deleteFile(file.id))
    } catch (e: AxiosError | any) {
        console.log(e)
    }
}