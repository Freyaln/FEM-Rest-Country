import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/countryCards.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CountryCards(props) {

    const countryList = props.countryList;


    return (
        <div className='cardsContainer'>
            {countryList.map((item, index) =>
                <Card sx={{ width: 345 }} key={index}>
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
                            Population : {item.population}
                        </Typography>
                        <Typography variant="body2">
                            Region : {item.region}
                        </Typography>
                        <Typography variant="body2">
                            Capital : {item.capital}
                        </Typography>
                    </CardContent>
                </Card>)}
        </div>
    )


};