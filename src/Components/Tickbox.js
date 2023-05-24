import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import '../Styling/row.css'


export default function AvailableTick({ checked, day, onChange }) {

    
    return(
        <FormControlLabel
            labelPlacement='top'
            control={ 
                <Checkbox 
                checked={checked}
                onChange={onChange}
                className='tickbox'
                />}
            label={day}
            />
    )
}