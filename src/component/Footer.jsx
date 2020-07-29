import React from "react";
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'rgb(66, 66, 66)',
    padding: '35px',
    color: 'white',
    marginTop: '120px'
  },
}));

function Copyright() {
    return (
      <Typography variant="h6" align="center">
        {'Copyright © '}
        
        {' Hamza '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}
