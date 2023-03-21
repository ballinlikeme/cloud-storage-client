import React from "react"
import { IFile } from "../../models/IFile"
import { FileProperty } from "../../ui/File/FileProperty";
import { apiService } from "../../api/apiService";

interface FileProps {
     file: IFile;
}

export const FileDownload: React.FC<FileProps> = ({ file }) => {

     const fileDownload = async (event: React.MouseEvent) => {
          event.stopPropagation()
          await apiService.downloadFile(file.id, file.name, file.type)
     }

     if (file.type !== "dir") {
          return (
               <FileProperty onClick={fileDownload}>DOWNLOAD</FileProperty>
          )
     }

     return <></>
}