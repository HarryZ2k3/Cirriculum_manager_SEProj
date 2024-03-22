// Importing Transition from '../../utils/Transition' and Header from './Header'
import Transition from '../../utils/Transition'
import Header from './Header';

export default function AppLayout({ children }) {
  // JSX returned by the component
  return (
    <Transition className="flex justify-center items-center flex-col">
      {/* Rendering the Header component */}
      <Header />
      {/* Wrapping the `children` prop in a div with a class name */}
      <div className="">
        {children}
      </div>
    </Transition>
  )
}