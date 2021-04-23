import {useRouter} from "next/router"

const ItemId = () => {
    const rout = useRouter()

    console.log(rout.query)
    return ( 
        <div>
            <h1>Item ID</h1>
        </div>
     );
}
 
export default ItemId;