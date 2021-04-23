import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "../components/nav"
import Image from "next/image"

export default function Home() {
  return (

    <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
  <Image src="/rcb.jpg" width={500} height={500}></Image>
      <h1>heel</h1>
    </div>
    
    </>
    
  )
}
