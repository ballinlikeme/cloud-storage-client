import React from 'react';
// import File from "../File/File";
// import Flex from "../../../../ui/Flex";
// import {useAppSelector} from "../../../../hooks/useAppSelector";
// import FilesListWrapper from "./ui/FilesListWrapper";
// import {useAppDispatch} from "../../../../hooks/useAppDispatch";
// import {getFiles} from "../../../../store/creators/FileActionCreators";
//
// const FilesList = () => {
//     // const {files, currentDir} = useAppSelector(state => state.fileReducer)
//     const {id} = useAppSelector(state => state.userReducer.user)
//     const dispatch = useAppDispatch()
//
//
//     React.useEffect(() => {
//         // dispatch(getFiles(id, currentDir?.id || null))
//     // }, [currentDir])
//
//         return (
//             <FilesListWrapper>
//                 <Flex direction="column">
//                     {/*{files.map(file => <File key={file.id} file={file} /> )}*/}
//                 </Flex>
//             </FilesListWrapper>
//         );
//
// };
//
// export default FilesList;