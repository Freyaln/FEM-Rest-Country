import React from "react";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const Layout = (props) => {

    const [viewMode, setViewMode] = useState('Night');
    return (
        <>
            <ThemeProvider theme={viewMode === 'Light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles />

                    <HeaderLayout viewMode={viewMode} setViewMode={setViewMode} />
                    <MainLayout />
                </>
            </ThemeProvider >
        </>
    );

}

export default Layout;