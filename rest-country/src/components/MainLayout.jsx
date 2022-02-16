import React from "react";
import CountryContainer from "./CountryContainer";

const MainLayout = (props) => {

    const styles = {
        main: {
            backgroundColor: '#202d36',
            height: '100%',
            width: '100%',
        }
    }
    return (

        <main style={styles.main}>
            <CountryContainer />
        </main>
    )

}

export default MainLayout;