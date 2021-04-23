import {useRouter} from "next/router"

const Price = () => {
    const rout = useRouter()

    console.log(rout.query)
    return ( 
        <div>
            <h1>Hello</h1>
        </div>
     );
}
 
export default Price;