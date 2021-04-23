import Link from "next/link"

const NavBar = () => {
    return ( 
       <div className="navbar">
           <ul>
           <Link href="/about">
           <li>About</li>
           </Link>
           <Link href="/">
           <li>Home</li>
           </Link>
               
           </ul>
       </div>
     );
}
 
export default NavBar;