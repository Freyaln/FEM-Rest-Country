import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import CountryCards from './CountryCards';

export default function CountryContainer() {

    const [countryList, setCountryList] = useState([]);
    const [pending, setPending] = useState(true);
    const fetchCall = axios.create({
        baseURL: 'https://restcountries.com/v3.1/',
        timeout: 2000,
    })

    useEffect(() => {

        setPending(false);

        (async () => {

            const { data } = await fetchCall.get(`all`, { cache: 'reload' })
            setCountryList(data);
        })();

    }, [])

    console.log(countryList)

    if (pending === false) {
        return (
            <>
                <CountryCards countryList={countryList} />
            </>
        )
    }

    return (
        <p>Loading</p>
    )
};