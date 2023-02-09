import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFile} from "../models/IFile";

type directoryType = IFile | null

interface FileState {
    files: IFile[];
    currentDir: directoryType;
    isLoading: boolean;
    errors: string[];
    folderPopUpVisibility: boolean;
    filePopUpVisibility: boolean;
    dirStack: directoryType[];
}

const initialState: FileState = {
    files: [],
    currentDir: null,
    isLoading: false,
    errors: [],
    folderPopUpVisibility: false,
    filePopUpVisibility: false,
    dirStack: []
}

const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {

        addNewFile(state, action: PayloadAction<IFile>) {
          state.files.push(action.payload)
        },

        setCurrentDir(state, action: PayloadAction<directoryType>) {
            state.currentDir = action.payload
        },

        fetchFiles(state) {
            state.isLoading = true
        },

        fetchFilesSuccess(state, action: PayloadAction<IFile[]>) {
            state.files = action.payload
            state.errors = []
            state.isLoading = false
        },

        fetchFilesError(state, action: PayloadAction<string[]>) {
            state.isLoading = false;
            state.errors = action.payload
        },

        toggleFolderPopUp(state) {
            state.folderPopUpVisibility = !state.folderPopUpVisibility
            document.body.style.overflow = state.folderPopUpVisibility ? "hidden" : "auto"
        },

        toggleFilePopUp(state) {
            state.filePopUpVisibility = !state.filePopUpVisibility
            document.body.style.overflow = state.filePopUpVisibility ? "hidden" : "auto"
        },

        addToStack(state, action: PayloadAction<directoryType>) {
            state.dirStack.push(action.payload)
        },

        deleteFromStack(state) {
            state.dirStack.pop()
        },

        deleteFile(state, action: PayloadAction<number>) {
            state.files = state.files.filter(file => file.id !== action.payload)
        }
    }
})

export const {deleteFile, addNewFile, setCurrentDir, fetchFiles, fetchFilesSuccess, fetchFilesError, toggleFilePopUp, toggleFolderPopUp, addToStack, deleteFromStack} = filesSlice.actions
export const filesReducer = filesSlice.reducer