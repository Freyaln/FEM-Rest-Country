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

    const styles = {
        cards: {
            backgroundColor: '#2b3743',
            color: '#fff'
        }
    }

    return (
        <div className='cardsContainer'>
            {countryList.map((item, index) =>
                <Card sx={{ width: 345 }} key={index} style={styles.cards}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.flags.svg}
                        alt={item.altSpelling}
                    />
                    <CardContent>
                        <Typography style={styles.cards} gutterBottom variant="h5" component="div">
                            {item.name.official}
                        </Typography>
                        <Typography style={styles.cards} variant="body2" color="text.secondary">
                            Population : {item.population}
                        </Typography>
                        <Typography style={styles.cards} variant="body2" color="text.secondary">
                            Region : {item.region}
                        </Typography>
                        <Typography style={styles.cards} variant="body2" color="text.secondary">
                            Capital : {item.capital}
                        </Typography>
                    </CardContent>
                </Card>)}
        </div>
    )


};