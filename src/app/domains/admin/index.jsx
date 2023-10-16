import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

export default function AdminDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>Analytics</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>Users</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>Payments</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>Settings</Paper>
            </Grid>
            </Grid>
        </div>
    );
}
