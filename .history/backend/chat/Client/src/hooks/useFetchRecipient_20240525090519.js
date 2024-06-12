import { useEffect, useState, useMemo
 } from "react";
import { baseUrl } from "../utils/services";
import { getRequest } from "../utils/services";


 export const useFetchRecipientUser =(chat,user)=>{
    
    const [recipientUser,setRecipientUser]=useState(null);
    const [error,setError] = useState(null);
    const recipientId = chat?.members.find((id) => id !==user?._id); // tìm người nhận 
    
    const getRecipientUser = async()=>{
            
        if(!recipientId){return null;}
        const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
       
        if(response.error){
            return setError(response);
        }
        setRecipientUser(response);
    };
    
    useEffect(() =>{
        getRecipientUser();
    },[recipientId]);
    
    return {recipientUser};
 };

