import NavBar from "./nav"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SideNav from "./sideNav";
import home from "../styles/Home.module.css"
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Layout = ({children}) => {
    const classes = useStyles();
    return (  
<>
            
        <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
         <SideNav></SideNav>
        </Grid>
        <Grid item xs={10}>
        
        <Paper elevation={3} className={home.fullWidthHeight}>
        <NavBar>

        </NavBar>
        <br></br>
          {children}
          </Paper>
        </Grid>
        
      </Grid>
    </div>
       
        

        </>
    );
}
 
export default Layout;