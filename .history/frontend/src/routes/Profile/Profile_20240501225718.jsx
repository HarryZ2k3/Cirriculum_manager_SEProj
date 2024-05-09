import Transition from '../../utils/Transition'

import { Announcement, TodayClass } from './ProfileComponents'
import { FaRegEdit } from 'react-icons/fa'
function Profile() {
  return (
      <Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
      {/* <Link to="/login">
        <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Login please
        </button>
      </Link> */}
      {/* Main content 3/4 */}

      {/* Side bar 1/4 */}
      <div className="flex w-1/3 flex-grow flex-col justify-between overflow-hidden px-8 py-4">
        {/* Profile */}
        <div className="mt-4 flex flex-col items-center justify-center gap-3">
          <img
            className="w-24 rounded-full"
            src="https://placehold.co/400"
            alt="Avatar"
          />
          <h3 className="text-2xl">Mia James</h3>
          <button className="flex items-center justify-center gap-2 rounded-full bg-card_home px-4 py-1 text-black">
            <FaRegEdit />
            Edit Profile
          </button>
          <div className="flex w-[80%] items-center justify-evenly gap-4 rounded-2xl bg-white text-black p-2 px-3">
            <div className="rounded-lg bg-card_blue px-3 text-center">
              <h4>Work Start</h4>
              <h4>08:00 AM</h4>
            </div>
            
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Profile