import React from "react";
import { useState } from "react";
import CountryContainer from "./CountryContainer";
import RegionList from "./RegionList";
import SearchBar from "./SearchBar";
import "../styles/Main.css";

const MainLayout = () => {

    const [listToFetch, setListToFetch] = useState('all');
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
                <SearchBar setListToFetch={setListToFetch} />
                <RegionList setListToFetch={setListToFetch} />
            </div>
            <CountryContainer listToFetch={listToFetch} />

        </main>
    )

}

export default MainLayout;