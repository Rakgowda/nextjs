import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps=async()=> {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    return {
        props :{
            rak:data
        }
    }
  }
  

const About = ({rak}) => {
    console.log(rak)
    return (  
        <>
        <Head>
          <title>about</title>
        </Head>
        <div>
      
          <h1>About</h1>
          <ul>
              {rak.map(r=>
                   (
                      <Link href={`/about/${r.id}`} key={r.id}><li>{r.title}</li></Link>
                  )
              )}
          </ul>
        </div>
        
        </>
    );
}
 
export default About;