// import { Stack } from "react-bootstrap";
// import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
// import avatar from '../../assets/avatar.svg';
// import { useContext } from "react";
// import { ChatContext } from "../../context/ChatContext";
// import ChatBox from "./ChatBox";
// const UserChat = ({chat,user}) => {
//     const {recipientUser} = useFetchRecipientUser(chat,user);
//     const {startLoadingMessages,updateCurrentChat} = useContext(ChatContext);
//     const {onlineUsers} = useContext(ChatContext);
//     const isOnline = onlineUsers?.some((user)=> user?.userId === recipientUser?._id)
//     return ( 
//     <Stack 
//     direction="horizontal" 
//     gap={3} 
//     className="user-card align-items-center p-2 justify-content-between"
//     role = "button"
//     > 
//     <div className = "d-flex">
//         <div className="me-2">
//             <img src={avatar} height="35px" />
//         </div>
//         <div className="text-content">
//             <div className="name">
//                 {recipientUser?.studentid}
//             </div>
//             <div className="text">
//                 Text Message
//             </div>
//         </div>
//     </div>
//     <div className="d-flex flex-column align-items-end">
//         <div className="date">12/12/2022</div>
//         {/* date */}
//         <div className="this-user-notifications">
//             2
//         </div>
//         {/* notifications */}
//         <span className={ isOnline ? "user-online":""}></span>
//         {/* status online or offline */}
//     </div>
//     </Stack> );
// }
 
// export default UserChat;

import { useContext } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from '../../assets/avatar.svg';
import { ChatContext } from "../../context/ChatContext";

const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);
    const { onlineUsers } = useContext(ChatContext);
    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

    return (
        <div 
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200 cursor-pointer"
            role="button"
        >
            <div className="flex-shrink-0">
                <img src={avatar} alt="User avatar" className="w-10 h-10 rounded-full" />
            </div>
            <div className="flex-grow ml-4">
                <div className="text-lg font-semibold">{recipientUser?.studentid}</div>
                <div className="text-sm text-gray-500">Text Message</div>
            </div>
            <div className="flex flex-col items-end">
                <div className="text-sm text-gray-400">12/12/2022</div>
                <div className="bg-red-500 text-white text-xs rounded-full px-2 py-1 mt-1">2</div>
                <span className={`w-3 h-3 rounded-full mt-2 ${isOnline ? "bg-green-500" : "bg-gray-300"}`}></span>
            </div>
        </div>
    );
}

export default UserChat;
