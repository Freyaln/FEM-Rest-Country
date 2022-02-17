import React from "react";
import HeaderItems from "./HeaderItems";
import '../styles/Header.css';

const HeaderLayout = (props) => {



    const styles = {
        header: {
            height: "5rem",
            width: '100%',
        },
    }

    return (

        <header style={styles.header} className='header'>
            <HeaderItems />
        </header>

    )

}


export default HeaderLayout;