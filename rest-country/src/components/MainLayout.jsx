import React from "react";
import CountryContainer from "./CountryContainer";
import RegionList from "./RegionList";
import SearchBar from "./SearchBar";
import "../styles/Main.css";

const MainLayout = (props) => {

    const styles = {
        main: {
            height: '100%',
            width: '100%',
            paddingTop: '1rem'
        }
    }
    return (

        <main style={styles.main}>
            <div className='topPanel'>
                <SearchBar />
                <RegionList />
            </div>
            <CountryContainer />

        </main>
    )

}

export default MainLayout;