import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const modalImage = {
    width: '80%',
}

const borderCountries = {
    flex: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap',
    },

}

export default function CountriesModals(props) {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.setShowModal(false);
    }
    let currencies = [];
    currencies.push(props.countrySelected[8]);
    currencies = Object.values(currencies[0]);
    let languages = [];
    languages.push(props.countrySelected[9]);
    languages = Object.values(languages[0]);

    let borderingCountries = [];
    if (props.countrySelected[10] !== undefined) {
        borderingCountries.push(props.countrySelected[10]);
        borderingCountries = Object.values(borderingCountries[0])
    };
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <img src={props.countrySelected[1]} style={modalImage} width='50%' alt={props.countrySelected[4] + ' ' + 'flag'} />
                    <Typography id="modal-modal-title" variant="h5" component="h2" >
                        {props.countrySelected[5]}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                        Population : {Number(props.countrySelected[2]).toLocaleString()}
                    </Typography>
                    <Typography id="modal-modal-description">
                        Region : {props.countrySelected[3]}
                    </Typography>
                    <Typography id="modal-modal-description" >
                        Sub region : {props.countrySelected[6]}
                    </Typography>
                    <Typography id="modal-modal-description" >
                        Capital : {props.countrySelected[0]}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Top level domain :  {props.countrySelected[7]}
                    </Typography>
                    <Typography id="modal-modal-description" >
                        Currencies :  {currencies.map((item) => item.name).join(', ')}
                    </Typography>
                    <Typography id="modal-modal-description">
                        Languages :  {languages.map((item) => item).join(', ')}
                    </Typography>
                    {props.countrySelected[10] && <Typography id="modal-modal-description" style={borderCountries.flex}>
                        Border countries : {borderingCountries.map((item) => <div className='borderCountries'>{item + ' '}</div>)}
                    </Typography>}
                </Box>
            </Modal>
        </div>
    );
}