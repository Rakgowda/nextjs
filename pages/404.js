import Link from "next/link"
import Head from 'next/head'
import {useEffect,useState,useRef} from "react"
import {useRouter} from "next/router"
const NotFound = () => {
    const router = useRouter();
    const [countDown, setcountDown] = useState(2);
    let intervalRef = useRef();

    const countDownBegin = () => setcountDown((prev) => prev - 1);


    if(countDown<=0)
    {
        console.log(countDown)
        router.push("/")
    }
    
    
    
    useEffect(() => {

        console.log("herere")
        
        intervalRef.current = setInterval(countDownBegin, 1000);
        console.log(intervalRef.current)
        
        return () => clearInterval(intervalRef.current);
        // countDownBegin()
        
    }, [])
    
    
    
    return (  
       
         <>
         <Head>
           <title>Not Found</title>
         </Head>
         <div>
            <h2>Oppsssss......</h2>
            <p>Page Not found</p>
            <p style={{"color":"red"}}>Navigate to home page <Link href="/"><a  style={{"color":"black"}}>Home page</a></Link></p>
        <h1>Page will redirect in {countDown} </h1>
        </div>
         
         </>
    );
}
 
export default NotFound;