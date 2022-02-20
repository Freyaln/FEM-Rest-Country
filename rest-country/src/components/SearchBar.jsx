
import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {

    const [countryList, setCountryList] = useState([]);
    const [pending, setPending] = useState(true);

    const fetchCall = axios.create({
        baseURL: 'https://restcountries.com/v3.1/',
        timeout: 10000,
    })

    useEffect(() => {
        setPending(false);
        (async () => {

            const { data } = await fetchCall.get(`all`, { cache: 'reload' })
            setCountryList(data);
        })();
    }, [])

    const handleOnChange = (value) => {
        props.setListToFetch(value)
    }

    if (pending === false) {
        return (

            <TextField onChange={() => handleOnChange(`name/${event.target.value}`)} className='searchBar' label="Search for a country" InputProps={{
                startAdornment: (
                    <SearchIcon />
                )
            }} />
        )
    }

    return (
        <p>Loading</p>
    )
};
