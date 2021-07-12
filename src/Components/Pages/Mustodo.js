import React from 'react'
import { Grid } from "@material-ui/core";
import Sidebar from '../Sidebar';

function Mustodo() {
    return (
        <div>
           <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <h1>Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo Mustodo </h1>
                </Grid>
            </Grid>
        </div> 
    )
}

export default Mustodo;
