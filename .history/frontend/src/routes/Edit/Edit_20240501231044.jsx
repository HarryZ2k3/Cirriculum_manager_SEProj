import Transition from '../../utils/Transition'

import { Announcement} from './EditComponents'
const myData = "Name Nguyen Huynh Thao My", "ITCSIU21204"
"0911 884 771", "ITCSIU21204@student.hcmiu.edu.vn",
"religion: "Vietnam"];
const listItems = myData.map((item) => <li key={item}>{item}</li>);
function Edit() {
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
              className="w-48 rounded-full"
              src="https://placehold.co/400"
              alt="Avatar"
            />
            {/* <h3 className="text-2xl">Mia James</h3> */}
            <h3 className="text-2xl">JPG or PNG no larger than 5MB</h3>
            <div>
               
            </div>
        </div>
      </div>
      <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
				<h1 className="text-left align-middle text-[3rem] text-text_blue tracking-wider">
					User information configuration
                    Name Nguyen Huynh Thao My
                    ID_card ITCSIU21204
                    phone +84 911 884 771
                    gmail: ITCSIU21204@student.hcmiu.edu.vn
                    religion: Vietnam
				</h1>
				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
					{/* Fake data */}
					{Array.from({ length: 7 }, (_, i) => (
						<Announcement
							key={i}
							content="Name"
						/>
					))}
				</div>
			</div>
    </Transition>
  )
}

export default Edit