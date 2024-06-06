import React from 'react';
import {Flex, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react';
import { useLocation, Outlet } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const PageLayout = () => {
    const { pathname } = useLocation();

    const gridTemplateColumns = useBreakpointValue({
        base: '5rem auto', // Single column for smaller screens
        md: '15rem auto', // Fixed width for first col, remaining space for second on md and above
    });

    return (
        <Flex>
            {pathname !== '/login' && pathname !== '/signup' ? (
                <Grid
                    w={'full'} h={'100vh'}
                    templateAreas={`"nav header"
                                    "nav main"`}
                    gridTemplateRows={'50px auto'}
                    gridTemplateColumns={gridTemplateColumns}
                >
                    <GridItem area={'header'} className={'z-10 fixed'}>
                        <Header />
                    </GridItem>
                    <GridItem area={'nav'} className={'z-10 left-0 top-0 fixed'}>
                        <SideBar />
                    </GridItem>
                    <GridItem flex={1} area={'main'} className={' bg-background'}>
                        <Outlet />
                    </GridItem>
                </Grid>
            ) : null}
        </Flex>
    );
};

export default PageLayout;
