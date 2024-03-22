import Transition from '../../utils/Transition'
import Header from './Header';
export default function AppLayout({ children }) {
  return (
    <Transition className="flex justify-center items-center flex-col">

        <div className="">
            <Header/>
            {children}
        </div>
    </Transition>
  )
}
