// import {createContext,useState,useCallback, useEffect} from "react";
// import { postRequest, baseUrl} from "../utils/services";
// export const AuthContext = createContext();

// export const AuthContextProvider = ({children}) =>{
//     const[user,setUser] = useState(null);
//     const [loginError,setLoginError] = useState(null);
//     const [isLoginLoading,setIsLoginLoading] = useState(false);
   
//     const [loginInfo, setLoginInfo] = useState({
//         StudentId: "",
//         Password: "",
//     });
//     console.log("User: ",user);
    
    
//     useEffect(()=>{
//         const user = localStorage.getItem("User");
//         setUser(JSON.parse(user));
//     },[])

   
    
//     const updateLoginInfo = useCallback((info) => {
//         setLoginInfo(info);
//     },[])

//     const logoutUser = useCallback(() => {
//         localStorage.removeItem("User");
//         setUser(null);
//     },[])
//     const loginUser = useCallback(async(e)=>{
//         e.preventDefault();
//         setIsLoginLoading(true);
//         setLoginError(null);
//         console.log("loginInfo: ", loginInfo);
//         const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));
//         if(response.error){
//             return setLoginError(response);
//         }
//         localStorage.setItem("User", JSON.stringify(response));
//         setUser(response);
//         console.log("User",user);
//         setIsLoginLoading(false);
//     },[loginInfo])
//     return (
//     <AuthContext.Provider value ={{
//         user,
//         logoutUser,
//         loginUser,
//         loginError,
//         loginInfo,
//         updateLoginInfo,
//         isLoginLoading,
//     }}>
//         {children}
//     </AuthContext.Provider>
//     );
// };