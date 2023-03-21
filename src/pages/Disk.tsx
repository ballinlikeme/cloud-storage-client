import React from "react"
import { Header } from "../modules/Header"
import { StyledMain } from "../ui/new/StyledMain";
import { StyledWrapper } from "../ui/new/StyledWrapper";
import { StyledLayout } from "../ui/new/StyledLayout";
import { FilesList } from "../modules/FilesList";

const Disk: React.FC = () => {

    return (
        <StyledWrapper>
            <Header />
            <StyledLayout>
                <StyledMain>
                    <FilesList />
                </StyledMain>
            </StyledLayout>
        </StyledWrapper>
    )
}

export default Disk