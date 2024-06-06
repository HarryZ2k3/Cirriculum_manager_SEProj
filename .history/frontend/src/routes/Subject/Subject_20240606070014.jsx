import Transition from '../../utils/Transition'
import { List } from './SubjectComponents'
import { useState, useEffect } from 'react';
import Grade from './Grade'

export default function Subject() {
	const switch = true;
	const [subjects, setSubjects] = useState([]);
  	useEffect(() => {
    fetch('https://665071efec9b4a4a6032194b.mockapi.io/subject')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSubjects(data);
      });
  }, []);
	
	return (
		<Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
			{/* The course 1/3 */}
			<div className = "flex w-1/3 flex-grow flex-col px-8 py-2">
				<h1 className="text-left align-middle text-[1.75rem] text-text_blue tracking-wider">
					List of registered subjects
				</h1>
				<div className = "flex w-full flex-col overflow-y-auto item-center justìy-evenly gap-4 rounded-2xl text-black p-2 px-3">
					{/* {subjects.map((subjects) => (
						subject = {subjects.subject},
						teacher = {subjects.subject},
					))} */}
					
					{/* {Array.from({length: 10 }, (_, i) => ( */}
					{subjects.map ((subjects) =>
						<List	
							subject = {subjects.subject}
							teacher = {subjects.teacher}
						/>
					)}
				</div>
			</div>
			<div className="flex w-2/3 flex-grow flex-col px-8 text-black overflow-y-auto">
				if (switch == true)<Grade/>
			</div>
		</Transition>
			
	)
}
