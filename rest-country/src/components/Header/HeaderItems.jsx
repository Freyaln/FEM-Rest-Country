import { Button } from "@mui/material";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import React from "react";
import { useState } from "react";
import '../../styles/HeaderItems.css';

export default function HeaderItems(props) {

    const [btnText, setBtnText] = useState('Light Mode');

    const changeBtnText = () => props.viewMode === 'Light' ? setBtnText('Light Mode') : setBtnText('Dark Mode')
    const changeViewTheme = () => props.viewMode === 'Light' ? props.setViewMode('Night') : props.setViewMode('Light');

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
        <>
            {props.viewMode === 'Night' && <h1 style={styles.titleNight} className='title'>Where in the world ?</h1>}
            {props.viewMode === 'Light' && <h1 style={styles.titleLight} className='title'>Where in the world ?</h1>}
            <Button style={styles.button} startIcon={<NightlightRoundIcon />} onClick={() => { changeBtnText(); changeViewTheme(); }}>{btnText}</Button>
        </>
    )
}