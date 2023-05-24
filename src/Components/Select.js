import React, { useState } from "react";
import '../Styling/row.css'
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";


export default function Selection({ rval, onChange, activity, disabled }) {

    return(
        <FormControl fullWidth className={disabled ? 'disabled-menu' : ''}>
            <InputLabel>Activity {rval}</InputLabel>
            <Select 
                value={activity}
                label="Activity"
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="UNAVAILABLE">Unavailable</MenuItem>
                <MenuItem value="FOOTBALL">Football</MenuItem>
                <MenuItem value="TENNIS">Tennis</MenuItem>
                <MenuItem value="BOXING">Boxing</MenuItem>
                <MenuItem value="SQUASH">Squash</MenuItem>
                <MenuItem value="KAYAKING">Kayaking</MenuItem>
                <MenuItem value="ROCK-CLIMBING">Rock Climbing</MenuItem>
                <MenuItem value="BADMINTON">Badminton</MenuItem>
            </Select>
        </FormControl>
    )
}