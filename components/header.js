import { useState } from 'react'
import { MenuAlt1Icon, MenuAlt1Icon as MenuIcon } from '@heroicons/react/outline'
import MantaIcon from './mantaIcon'
import NavSlideover from './slideover'

const Header = ({ className }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
    <NavSlideover open={open} setOpen={setOpen} />
    <header className={`header w-full px-4 py-2 flex items-center h-12 ${className}`}>
      <div className="center-logo flex flex-1 items-center">
        <MantaIcon className="w-8 h-8" />
        <div className="flex items-center -mt-1 ml-2 text-white ">
        <span className='font-bold text-xl'>MANTA</span>
        </div>
      </div>
      <div className="h-6 w-6 mr-2" onClick={handleOpen}>
        <MenuAlt1Icon className='w-full text-white' />
      </div>
      {/* <div className="h-6 w-6"></div> */}
    </header>
    </>
  )
}

export default Header