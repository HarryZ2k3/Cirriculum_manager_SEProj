// import { useContext } from "react";
// import { ChatContext } from "../../context/ChatContext";
// import { AuthContext } from "../../context/AuthContext";

// const PotentialChats = () => {
//     const {user} = useContext(AuthContext);
//     const {potentialChats,createChat,onlineUsers} = useContext(ChatContext);
//     return ( <>
//     <div className="all-users">
//         {potentialChats && 
//             potentialChats.map((u,index) => {
//             return (
//                 <div className="single-user" key ={index} onClick={()=> createChat(user._id,u._id)}>
//                 {u.studentid}
//                 <span 
//                 className={
//                     onlineUsers?.some((user) => user?.userId === u?._id)
//                     ?"user-online"
//                     :""
//                 }
//                 ></span>
//                 </div>
//             );
//         })}
        
//     </div>
//     </> );
// };
 
// export default PotentialChats;


import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
    const { user } = useContext(AuthContext);
    const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

    return (
        <div className="p-4 space-y-2">
            {potentialChats && potentialChats.map((u, index) => (
                <div
                    className="flex items-center p-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                    key={index}
                    onClick={() => createChat(user._id, u._id)}
                >
                    <div className="flex-grow">
                        <div className="text-lg font-semibold">{u.studentid}</div>
                    </div>
                    <span
                        className={`w-3 h-3 rounded-full ml-2 ${onlineUsers?.some((user) => user?.userId === u?._id) ? "bg-green-500" : "bg-gray-300"}`}
                    ></span>
                </div>
            ))}
        </div>
    );
};

export default PotentialChats;
