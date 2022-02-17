import { Button } from "@mui/material";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import React from "react";
import { useState } from "react";
import '../styles/HeaderItems.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

export default function HeaderItems() {

    const [viewMode, setViewMode] = useState('Night');
    const [btnText, setBtnText] = useState('Dark Mode');

    const changeBtnText = () => viewMode === 'Light' ? setBtnText('Dark Mode') : setBtnText('Light Mode')
    const changeViewTheme = () => viewMode === 'Light' ? setViewMode('Night') : setViewMode('Light');

    const styles = {
        titleNight: {
            fontSize: '1.5rem',
            paddingLeft: '2.3rem',
            color: '#fff',
        },
        titleLight: {
            fontSize: '1.5rem',
            paddingLeft: '2.3rem',
            color: '#000',
        },
        button: {
            paddingRight: '2.5rem'
        }
    }

    return (
        <ThemeProvider theme={viewMode === 'Light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                {viewMode === 'Night' && <h1 style={styles.titleNight} className='title'>Where in the world ?</h1>}
                {viewMode === 'Light' && <h1 style={styles.titleLight} className='title'>Where in the world ?</h1>}
                <Button style={styles.button} startIcon={<NightlightRoundIcon />} onClick={() => { changeBtnText(); changeViewTheme(); }}>{btnText}</Button>
            </>
        </ThemeProvider >
    )
}