import Link from "next/link"
import { makeStyles } from '@material-ui/core/styles';
import navbar from "../styles/NavBar.module.css"
import Paper from '@material-ui/core/Paper';

const NavBar = () => {
    return ( 
        <>
        {/* <Paper elevation={3}> */}

       <div className={`${navbar.nav}`}>

           <style jsx>
               {
                   `
                   ul{
                    list-style: none;
                    display: flex;
                   }

                   ul li{
                       margin : 4px;
                   }

                   li a {
                    text-decoration: none;
                   }

                   `
               }
           </style>
           <div>
          <h1 className="text-center">
              Venkateshwara traders
          </h1>
          </div>

          <div className={`${navbar.leftHeading}`}>
              <ul>
                  <li>Hey Rakshith,</li>
                  <li><a>Logout</a></li>
              </ul>
          </div>
           
       </div>
       {/* </Paper> */}
       </>
     );
}
 
export default NavBar;