import React from "react"
import {DashboardLayout} from "../ui/DashboardLayout";
import {FilesList} from "../modules/FilesList";
import Container from "../ui/Container";
import {Header} from "../modules/Header"

const Disk: React.FC = () => {

    return (
        <DashboardLayout>
            <Header />
            <Container>
                <FilesList />
            </Container>
        </DashboardLayout>
    )
}

export default Disk