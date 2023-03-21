import React from "react"
import { FileProperty } from "../../ui/File/FileProperty"
import { IFile } from "../../models/IFile";
import { FileDownload } from "./FileDownload";
import { FileDelete } from "./FileDelete";
import { getLastModifiedTime } from '../../helpers/GetLastModifiedTime';
import { bytesToKiloBytes } from "../../helpers/BytesToKiloBytes";

interface FileProps {
     file: IFile;
}

export const FileProperies: React.FC<FileProps> = ({ file }) => {
     return (
          <>
               <FileProperty start={3}>{bytesToKiloBytes(file.size)}{file.type.toUpperCase()} file</FileProperty>
               <FileDownload file={file} />
               <FileDelete id={file.id} />
               <FileProperty start={6}>{bytesToKiloBytes(file.size)} KB</FileProperty>
               <FileProperty start={7}>{getLastModifiedTime(file.updatedAt)}</FileProperty>
          </>
     )
}