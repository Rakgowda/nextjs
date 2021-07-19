import React,{useState,useEffect} from 'react';
import CardLayout from '../components/card';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab:{
        position: "absolute",
        bottom: "2em",
        right: "2em"
    }
  }));

function Item(props) {
    const classes = useStyles();
   
    const [item, setitem] = useState([]);
    useEffect(() => {
        
        let items = [{
            title:"Raagi",
            data:[
              ["rate",17],
              ["gst",8],
              ["lastUpdated","20/12/2020","#01937C"]
            ],
            "color":"primary"
            },
            {
                title:"Wheat",
                data:[
                  ["rate",97],
                  ["gst",8],
                  ["lastUpdated","29/12/2020","#01937C"]
                ],
                "color":"primary"
            },



        ]
        setitem(items)
    }, [item])


    return (
        <>
        <h1>Item's</h1>
        <div className="d-flex  justify-content-center mt-5">
            {item.map(i=>{
                return (
                    <div className="m-2" key={item.itemType}>
                    <CardLayout data={i}></CardLayout>
                    </div>
                )
            })}
            </div>

            <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
        </>
    );
}

export default Item;