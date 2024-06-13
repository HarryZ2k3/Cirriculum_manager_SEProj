// import { useContext } from "react";
// import ChatBox from "../components/chat/ChatBox";
// import { ChatContext } from "../context/ChatContext";
// import { Container, Stack } from "react-bootstrap";
// import { AuthContext } from "../context/AuthContext";
// import UserChat from "../components/chat/UserChat";
// import PotentialChats from "../components/chat/PotentialChats";
// const Chat = () => {
//     const {user} = useContext(AuthContext);
//     // useContext(ChatContext);
//     const {userChats,isUserChatsLoading,updateCurrentChat} = useContext(ChatContext);
//     return ( 
//     <Container>
//        <PotentialChats/>
//        {userChats?.length <1? null:(
//         <Stack direction ="horizontal" gap= {4} className ="align-items-start">
//             <Stack className=" message-box flex-grow-0 pe-3" gap={3}> 
//                  {isUserChatsLoading && <p>Loading chats...</p>}
//                  {userChats?.map((chat,index)=>{
//                      return(
//                          <div key={index} onClick ={()=> updateCurrentChat(chat)}>
//                              <UserChat chat = {chat} user = {user}/>
//                          </div>
//                      );
//                      }
//                  )
//                  }
                
//              </Stack>
//              <ChatBox/>
//          </Stack>
//      )}
//     </Container>
//     );
// }

// export default Chat;

import { useContext } from "react";
import ChatBox from "../components/chat/ChatBox";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";
import Transition from '..//utils/Transition';
const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);

    return (
        <Transition className="flex flex-grow bg-gradient-to-b from-background_top via-background_mid to-background_bottom">
            <div className="flex min-h-screen ">
                <div className="p-4 overflow-auto">
                    <PotentialChats />
                    {isUserChatsLoading ? (
                        <p className="text-gray-500">Loading chats...</p>
                    ) : (
                        <div className="space-y-4">
                            {userChats?.map((chat, index) => (
                                <div key={index} onClick={() => updateCurrentChat(chat)} className="cursor-pointer">
                                    <UserChat chat={chat} user={user} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className=border border-black">
                    <ChatBox />
                </div>
            </div>
        
        </Transition>
    );
}

export default Chat;
