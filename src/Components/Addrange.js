import React, { useState } from "react";
import '../Styling/row.css'
import { Checkbox } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function Addrange({checked, onChange}) {

    
    return(
        <Checkbox
            className="addrange"
            checked={checked}
            onChange={onChange}
            checkedIcon={<RemoveRoundedIcon />}
            icon={<AddRoundedIcon />}
        />
    )
}