import React from 'react'
import Sidebar from '../Sidebar';
import { Grid } from "@material-ui/core";

function Dashboard() {
    return (
        <div>

            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <h1>Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard </h1>
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard;
