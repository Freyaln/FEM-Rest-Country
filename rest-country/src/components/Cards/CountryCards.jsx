import React from 'react';
import { useState } from "react";
import '../../styles/countryCards.css';
import CountriesModals from '../Modals/CountriesModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CountryCards(props) {

    const [showModal, setShowModal] = useState(false);
    const [countrySelected, setCountrySelected] = useState([]);
    const countryList = props.countryList;

    function handleClick(value) {
        setShowModal(true);
        setCountrySelected(value);
    }
    return (
        <div className='cardsContainer'>
            {countryList.map((item, index) =>
                <Card sx={{ width: 345 }} key={index} onClick={() => handleClick([item.capital, item.flags.svg, item.population, item.region, item.name.official, item.name.common, item.subregion, item.tld, item.currencies, item.languages, item.borders])}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.flags.svg}
                        alt={item.altSpelling}
                    />
                    <CardContent className='cards'>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name.official}
                        </Typography>
                        <Typography variant="body2">
                            Population : {item.population.toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Region : {item.region}
                        </Typography>
                        <Typography variant="body2">
                            Capital : {item.capital}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            {showModal && <CountriesModals setShowModal={setShowModal} countrySelected={countrySelected} />}
        </div>
    )


};