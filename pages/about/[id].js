import {useRouter} from "next/router"

export const getStaticPaths=async() =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data1 = await res.json();

    console.log("**********************")
    console.log(data1)

    const paths = data1.map(r=>{
        return {
            params:{id:r.id.toString()}
        }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps=async(context)=> {

    const id = context.params.id;
    console.log(id)
   
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/'+id);
    const data = await res.json()
    return {
        props :{
            rak:data
        }
    }
  }

const DetailPage = ({rak}) => {
    const rout = useRouter()
    console.log(rout.route)
    console.log(rout.query)
    console.log(rout.pathname)
    return (  
        <div>
            <h1>{rak.title}</h1>
        </div>
    );
}
 
export default DetailPage;