import {Container, Nav, Navbar, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom"
import { useContext } from "react";
const NavBar = () => {
    const {user,logoutUser}  = useContext(AuthContext);
    return  <Navbar bg ="dark" className ="mb-4" style={{height:"3.75rem"}}>
        <Container>
            <h2>
              <Link to ="/" className="link-light text-decoration-none">
              ChatApp
              </Link>  
            </h2>
            {user && (
            <span className ="text-warning">  {user?.studentid ? "Logged in as " + user?.studentid : "Please login!!!" } </span>
            )}
            {/* if user -> not null -> continue checking (...) and execute the code also. In contrast, if it is null, 
            stop checking and return false */}
            <Nav>
                <Stack direction= "horizontal" gap ={3}>
                    {
                        user && (<>
                         <Link onClick={()=> logoutUser()} to ="/login" className="link-light text-decoration-none">
                            Logout
                        </Link>  
                        </>)
                    }
                    {!user && (<>
                    <Link to ="/login" className="link-light text-decoration-none">
                        Login
                    </Link>  

                    {/* <Link to ="/Register" className="link-light text-decoration-none">
                        Register
                    </Link>  */}
                    </>)
                    }
                </Stack>
            </Nav>
        </Container>
        </Navbar> ;
}
 
export default NavBar;