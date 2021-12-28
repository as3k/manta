import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import KofiIcon from './kofiIcon'
import SolanaIcon from './solanaIcon'

export default function NavSlideover({ open, setOpen }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-12 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-gray-dark shadow-xl overflow-y-hidden text-white">
                  <div className="h-12 border-b border-gray-stroke flex flex-col justify-center px-4">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className='font-bold text-xl'>MANTA</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <a href="https://ko-fi.com/zkgio" target="_blank" rel='noreferrer' className="menu-option flex items-center space-x-4">
                        <div className="icon w-8 h-8">
                          <KofiIcon className="w-full" />
                        </div>
                        <div className='text'>Buy me a coffee</div>
                      </a>
                      {/* <a href="https://ko-fi.com/zkgio" target="_blank" rel='noreferrer' className="menu-option flex items-center space-x-4">
                        <div className="icon w-8 h-8">
                          <SolanaIcon className="w-full" />
                        </div>
                        <div className='text'>Donate Solana</div>
                      </a> */}
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}