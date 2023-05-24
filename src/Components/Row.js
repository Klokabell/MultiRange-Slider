import AvailableTick from "./Tickbox";
import React, { useState } from "react";
import MultiRangeSlider from "./MultiRange";
import Addrange from "./Addrange";
import SingleRangeSlider from "./SingleRange";
import Selection from "./Select";
import { Grid, Box, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '../Styling/row.css'


export default function Dayrow({day}) {
    const [value1, setValue1] = useState(true);
    const [value2, setValue2] = useState(true)
    const [activity, setActivity] = useState('')
    const [activity2, setActivity2] = useState('')



    const handleChange = (e) => {
        console.log('handleChange called');
        setValue1(e.target.checked);
      };

    const handleRange = (e) => {
        console.log('handleRange called '+ value2)
        setValue2(e.target.checked);
    };

    const handleActivity = (e) => {
        setActivity(e.target.value)
    }
    const handleActivity2 = (e) => {
        setActivity2(e.target.value)
    }

    return(
        <Box>
        <Grid container className="gridcontainer" direction={"row"} spacing={3}
        sx={{ alignItems: "center",
              boxSizing: "border-box"
            }}>
            <Grid item xs={1} > 
                <AvailableTick checked={value1} onChange={handleChange} day={day} />
            </Grid>
            <Grid item xs={1}>
                <Selection rval={"1"} onChange={handleActivity} activity={activity} disabled={!value1} />
            </Grid>
            <Grid item xs={8} >
                <Grid container direction={"row"} justifyContent="space-around" spacing={2}> 
                    <Grid item xs={5}>
                        <Typography variant="body1" fontFamily="Roboto" id="act1">{activity}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" fontFamily="Roboto" id="act2">{activity2}</Typography> 
                    </Grid>
                </Grid>
                {value2 ? 
                    <MultiRangeSlider enabled={value1} initialValue={[6, 12, 18, 24]} />
                    :<SingleRangeSlider enabled={value1} initialValue={[6, 12]} />}  
            </Grid>
            <Grid item xs={1}>
                {value2 ? 
                    <Selection rval={"2"} onChange={handleActivity2} activity={activity2} disabled={!value1} />
                    : "" 
                }
            </Grid>
            <Grid item xs={1}>
                <Addrange checked={value2} onChange={handleRange} />
            </Grid>
        </Grid>
        </Box>
        )
}