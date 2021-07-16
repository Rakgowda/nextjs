import React from 'react';
import sideNav from "../styles/SideNav.module.css"
import home from "../styles/Home.module.css" 
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));


function SideNav(props) {
//   const classes = useStyles();

    return (
        <div className={sideNav.main}>
            <Paper elevation={3} className={sideNav.papper}>
            <div className={home.flexcontainer}>


                 <div className={home.flexchild}> <Link href="/item">Item</Link></div>
                 <div className={home.flexchild}> <Link href="/buy">Buy</Link></div>
                 <div className={home.flexchild}> <Link href="/">Home</Link></div>
                 <div className={home.flexchild}> <Link href="/sell">Sell</Link></div>
                 <div className={home.flexchild}> <Link href="/report">Report</Link></div>

            </div>
            </Paper>
        </div>
    );
}

export default SideNav;