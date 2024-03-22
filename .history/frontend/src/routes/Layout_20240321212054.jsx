// Importing Transition from '../../utils/Transition' and Header from './Header'
import Transition from '../../utils/Transition'
import Header from './Header';

export default function AppLayout({ children }) {
  return (
    <Transition className="flex justify-center items-center flex-col">
      <Header />
      <div className="">
        {children}
      </div>
    </Transition>
  )
}