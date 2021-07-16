import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "../components/nav"
import Image from "next/image"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (

    <>
    
 
      <h1>Hey there,</h1>
   
    
    </>
    
  )
}
