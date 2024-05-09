import Transition from '../../utils/Transition'

// Components
import { Chats } from './SocialComponents'
import { Link } from 'react-router-dom'

export default function Social() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">

      {/* Chats */}
      <div className = "mt-4 flex w-1/3 flex-col items-center justify-center overflow-hideen px-8 py-4 gap-2 border-3">
	  <div className = "flex w-2/3 flex-grow flex-row justify-between overflow-hidden px8 py-4">
        <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
            <div className = "flex h-full w-full flex-col gap-4 overflow-y-auto">
                {/* Fake data */}
                {Array.from({ length: 4 }, (_, i) => (
                    <Chats
                      key ={i}
					  avatar ="https://placehold.co/400"
					  name = "Name"
					  content = "Last chat message"
                    />
                ))}
            </div>
        </div>
      </div>
      </div>


      {/* User Infor */}
      <div className = "flex w-2/3 flex-grow flex-row justify-between overflow-hidden px8 py-4">
        <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
            <div className = "flex h-full w-full flex-col gap-4 overflow-y-auto">
                {/* Fake data */}
                {Array.from({ length: 4 }, (_, i) => (
                    <Chats
                      key ={i}
					  user_avatar ="https://placehold.co/400"
					  name = "Name"
					  last_chat = "Last chat message"
                    />
                ))}
            </div>
        </div>
      </div>
		</Transition>
	)
}
