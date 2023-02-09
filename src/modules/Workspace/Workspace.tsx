import React from 'react';
import Wrapper from "./ui/Wrapper";
import Container from "../../ui/Container";
import Flex from "../../ui/Flex";
import Layout from "./ui/Layout";
// import FilesList from "./components/FilesList/FilesList";
import ToolBar from "./components/ToolBar/ToolBar";
const Workspace = () => {
    return (
        <Container>
            <Wrapper>
                <Flex gap={20}>
                    <Layout flex="1 1 auto">
                        <ToolBar />
                        {/*<FilesList />*/}
                    </Layout>
                    <Layout flex="0 1 30%">
                        USER PROFILE
                    </Layout>
                </Flex>
            </Wrapper>
        </Container>
    );
};

export default Workspace;