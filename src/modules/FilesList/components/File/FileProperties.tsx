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
               <FileDownload file={file} />
               <FileDelete id={file.id} />
               <FileProperty start={5}>{bytesToKiloBytes(file.size)} KB</FileProperty>
               <FileProperty start={6}>{getLastModifiedTime(file.updatedAt)}</FileProperty>
          </>
     )
}