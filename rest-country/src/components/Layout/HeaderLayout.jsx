import React from "react";
import HeaderItems from "../Header/HeaderItems";
import '../../styles/Header.css';

const HeaderLayout = (props) => {



    const styles = {
        header: {
            height: "5rem",
            width: '100%',
        },
    }

    return (

        <header style={styles.header} className='header'>
            <HeaderItems viewMode={props.viewMode} setViewMode={props.setViewMode} />
        </header>

    )

}


export default HeaderLayout;