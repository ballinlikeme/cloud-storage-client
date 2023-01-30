import React from 'react';
import File from "../File/File";
import Flex from "../../../../ui/Flex";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import fileService from "../../../../services/fileService";
import {IFile} from "../../../../models/IFile";
import FilesListWrapper from "./ui/FilesListWrapper";
import {useLocation} from "react-router";
import PaginationBar from "../PaginationBar/PaginationBar";


const FilesList = () => {
    const {id} = useAppSelector(state => state.userReducer.user)
    const [files, setFiles] = React.useState<IFile[]>([])
    const {pathname} = useLocation()
    const filesToPathName = files.filter(file => (
        pathname === '/' ? file.path === '' : file.path === pathname
    ));
    console.log(filesToPathName)
    console.log(files)
    // TODO: PAGINATION
    // const filesPerPage = 10
    // const pageAmount = files.length / 10
    // const currentPage = 2
    // const startIndex = (currentPage - 1) * filesPerPage
    // const endIndex = startIndex + 10
    //
    // console.log(files.length)
    // console.log(pageAmount)
    // const filesToDisplay = files.slice(startIndex, endIndex)


    React.useEffect(() => {
        fileService.getFiles(id)
            .then(response => setFiles(response))
    }, [ ])

        return (
            <FilesListWrapper>
                <Flex direction="column">
                    {filesToPathName.map(file => (<File file={file} key={file.id} />))}
                </Flex>
            </FilesListWrapper>
        );

};

export default FilesList;