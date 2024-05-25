import Transition from '../../utils/Transition'

// Components
import { Chats } from './SocialComponents'
import { Link } from 'react-router-dom'

export default function Social() {
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">

      {/* Profile */}
      <div className = "mt-4 flex w-1/3 flex-col items-center justify-center overflow-hideen px-8 py-4 gap-2 border-3">
          <div className ="flex w-[100%] items-center justify-evenly gap-4 text-black p-2 px-3 text-2xl">
              <h3> Change profile picture</h3>
          </div> 
          <img
              className="w-48 rounded-full"
              src="https://placehold.co/400"
              alt="Avatar"
          />
          <div className ="flex w-[100%] items-center justify-evenly gap-4 text-black p-2 px-3">
              <h3> JPG or PNG no larger than 5 MB</h3>
          </div> 
          <Link to = "/">
              <button className="flex items-center justify-center gap-2 rounded-full bg-card_home px-4 py-1 text-black">
                  Browse..
              </button>
					</Link>
      </div>


      {/* User Infor */}
      <div className = "flex w-2/3 flex-grow flex-row justify-between overflow-hidden px8 py-4">
        <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
            <div className = "flex h-full w-full flex-col gap-4 overflow-y-auto">
                {/* Fake data */}
                {Array.from({ length: 4 }, (_, i) => (
                    <Chats
                      key ={i}
					  user_avatar,
					  name,
					  last_chat
                    />
                ))}
            </div>
        </div>
      </div>
		</Transition>
	)
}
