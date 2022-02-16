import React from "react";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";

const Layout = (props) => {

    return (
        <React.Fragment>
            <HeaderLayout />
            <MainLayout />
        </React.Fragment>
    );

}

export default Layout;