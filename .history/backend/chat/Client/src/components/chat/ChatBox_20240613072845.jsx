// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { ChatContext } from "../../context/ChatContext";
// import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
// import { Stack } from "react-bootstrap";
// import moment from "moment"
// import InputEmoji from "react-input-emoji"
// const ChatBox = () => {
//     const {user} = useContext(AuthContext);
//     const {currentChat, messages,isMessagesLoading, sendTextMessage} = useContext(ChatContext);
//     // console.log("current chat: ",currentChat);
//     const {recipientUser} = useFetchRecipientUser(currentChat,user);
//     const [textMessage,setTextMessage] = useState("");
//     console.log("Text Message",textMessage);
//     //user chạy được 
//     if(!recipientUser){
        
//         return (
//         <p style={{textAlign:"center", width:"100%"}}>
//             No conversation selected yet...
//         </p>
//     )} 

//     if(isMessagesLoading){
        
//         return (
//         <p style={{textAlign:"center", width:"100%"}}>
//             Loading Chat....
//         </p>
//     );
// }
//     // return <>Chat Box</>;
//     return ( 
//     <Stack gap={4} className ="chat-box">
//         <div className="chat-header">
//             <strong>
//                 {recipientUser?.studentid}
//             </strong>
//         </div>
//         <Stack gap={3} className="messages">
//             {messages && messages.map((messages,index) => (
//             <Stack 
//             key={index}
//             className ={`${messages?.senderId === user?._id 
//                 ? 'message other'
//                 : 'message self'}`} 
//             >
//                 <span> {messages.text}</span>
//                 <span className="message-footer">{moment(messages.createdAt).calendar()}</span>
//             </Stack>
//         ))}
//         </Stack>
//         {/* chat Input */}
//         <Stack direction="horizontal" gap = {3} className="chat-input flex-grow-0">
//             <InputEmoji value ={textMessage} 
//             onChange ={setTextMessage} 
//             fontFamily="nunito" 
//             borderColor="rgba(72,112,223,0.2"/>
//             <button className="send-btn" onClick={() => sendTextMessage(textMessage,user,currentChat._id,setTextMessage)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" 
//                     width="16" 
//                     height="16" 
//                     fill="currentColor" 
//                     class="bi bi-send-fill" 
//                     viewBox="0 0 16 16">
//                     <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
//                 </svg>
//             </button>
//         </Stack>
//     </Stack> 
//     );
// };

// export default ChatBox;

// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { ChatContext } from "../../context/ChatContext";
// import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
// import InputEmoji from "react-input-emoji";
// import moment from "moment";

// const ChatBox = () => {
//     const { user } = useContext(AuthContext);
//     const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext);
//     const { recipientUser } = useFetchRecipientUser(currentChat, user);
//     const [textMessage, setTextMessage] = useState("");

//     if (!recipientUser) {
//         return <p className="text-center w-full">No conversation selected yet...</p>;
//     }

//     if (isMessagesLoading) {
//         return <p className="text-center w-full">Loading Chat...</p>;
//     }

//     return (
//         <div className="flex flex-col h-full rounded-lg shadow-md p-4">
//             <div className="chat-header font-semibold text-xl mb-4">
//                 {recipientUser?.studentid}
//             </div>
//             <div className="flex-grow overflow-y-auto space-y-4">
//                 {messages && messages.map((message, index) => (
//                     <div key={index} className={`flex ${message?.senderId === user?._id ? 'justify-end' : 'justify-start'}`}>
//                         <div className={`p-2 rounded-lg shadow-md ${message?.senderId === user?._id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
//                             <p>{message.text}</p>
//                             <span className="text-xs text-gray-500">{moment(message.createdAt).calendar()}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex items-center mt-4">
//                 <InputEmoji
//                     value={textMessage}
//                     onChange={setTextMessage}
//                     fontFamily="nunito"
//                     borderColor="rgba(72,112,223,0.2)"
//                     className="flex-grow"
//                 />
//                 <button
//                     className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200"
//                     onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
//                         <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChatBox;


import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import InputEmoji from "react-input-emoji";
import moment from "moment";
import avatar from '../../assets/avatar.svg'; // Replace with actual avatar path

const ChatBox = () => {
    const { user } = useContext(AuthContext);
    const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext);
    const { recipientUser } = useFetchRecipientUser(currentChat, user);
    const [textMessage, setTextMessage] = useState("");

    if (!recipientUser) {
        return <p className="text-center w-full">No conversation selected yet...</p>;
    }

    if (isMessagesLoading) {
        return <p className="text-center w-full">Loading Chat...</p>;
    }

    return (
        <div className="flex flex-col h-3/4 w-full rounded-lg shadow-md p-4">
            <div className="chat-header flex items-center mb-4">
                <img src={avatar} alt="Recipient avatar" className="w-10 h-10 rounded-full mr-4" />
                <div className="font-semibold text-xl">{recipientUser?.studentid}</div>
                <span className={`ml-2 w-3 h-3 rounded-full ${true ? 'bg-green-500' : 'bg-gray-300'}`}></span> {/* Online indicator */}
            </div>
            <div className="flex-grow overflow-y-auto space-y-4">
                {messages && messages.map((message, index) => (
                    <div key={index} className={`flex ${message?.senderId === user?._id ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-end space-x-2 ${message?.senderId === user?._id ? 'flex-row-reverse' : 'flex-row'}`}>
                            <img src={avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
                            <div className={`p-2 rounded-xl shadow-md max-w-xs ${message?.senderId === user?._id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                <p>{message.text}</p>
                                <span className="text-xs text-gray-500">{moment(message.createdAt).calendar()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mt-4">
                <InputEmoji
                    value={textMessage}
                    onChange={setTextMessage}
                    fontFamily="nunito"
                    borderColor="rgba(72,112,223,0.2)"
                    className="flex-grow"
                />
                <button
                    className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200"
                    onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
