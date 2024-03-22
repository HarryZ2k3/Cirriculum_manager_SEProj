import Transition from '../../utils/Transition'
import { Outlet } from 'react-router-dom';
import Header from './Header';
export default function AppLayout() {
  return (
    <Transition className="flex justify-center items-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-2 w-full">
        <div className="lg:col-span-3">
          <SlideBar />
        </div>
        <div className="lg:col-span-5 flex flex-col bg-primary-800 rounded-lg">
            <Header/>
          <Outlet />
        </div>
      </div>
    </Transition>
  )
}
