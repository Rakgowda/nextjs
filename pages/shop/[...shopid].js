import {useRouter, UseRouter} from "next/router"
const SHopId = () => {
    const r = useRouter()
    console.log(r.query)
    return ( <div>
        <h1>
            shop id
        </h1>
    </div> );
}
 
export default SHopId;