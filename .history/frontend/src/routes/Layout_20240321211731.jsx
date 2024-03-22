import Transition from '../../utils/Transition'
import { Outlet } from 'react-router-dom';
import Header from './Header';
export default function AppLayout() {
  return (
    <Transition className="flex justify-center items-center flex-col">

        <div className="lg:col-span-5 flex flex-col bg-primary-800 rounded-lg">
            <Header/>
          <Outlet />
        </div>
      </div>
    </Transition>
  )
}
