import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function RegionList(props) {

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFetch = (item) => {
        switch (item.item) {
            case 'Africa':
                props.setListToFetch('region/africa');
                break;
            case 'Americas':
                props.setListToFetch('region/americas');
                break;
            case 'Asia':
                props.setListToFetch('region/asia');
                break;
            case 'Europe':
                props.setListToFetch('region/europe');
                break;
            case 'Oceania':
                props.setListToFetch('region/oceania');
                break;
            case 'All':
                props.setListToFetch('all');
                break;
            default:
                props.setListToFetch('all');
        };
    };


    return (
        <>
            <Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Filter by Region</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                {regions.map((item, index) =>
                    <MenuItem key={index} onClick={() => { handleClose(); handleFetch({ item }) }}>{item}</MenuItem>
                )}
            </Menu>
        </>
    )
}
