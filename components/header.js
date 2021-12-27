import { MenuAlt1Icon as MenuIcon } from '@heroicons/react/outline'

const Header = ({ className }) => {
  return (
    <div className={`header w-full px-4 flex items-center ${className}`}>
      <div className="left-icon">
        {/* <MenuIcon className="w-6 h-6 text-gray-light" /> */}
      </div>
      <div className="center-logo flex justify-center flex-1">
        <span className='font-bold text-white'>MANTA</span>
      </div>
      <div className="right-area h-6 w-6"></div>
    </div>
  )
}

export default Header