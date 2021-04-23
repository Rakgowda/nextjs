import NavBar from "./nav"
const Layout = ({children}) => {
    return (  
        <div>
            <NavBar>

            </NavBar>
            {children}

        </div>
    );
}
 
export default Layout;