import Transition from '../../utils/Transition'
import { Outlet } from 'react-router-dom';
import Header from './Header';
export default function AppLayout() {
  return (
    <Transition className="flex justify-center items-center flex-col">

        <div className="">
            <Header/
        </div>
    </Transition>
  )
}
