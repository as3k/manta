import { DuplicateIcon } from '@heroicons/react/outline'
import Header from '../components/header'
import Toggle from '../components/toggle'

export default function Home() {
  return (
    <div className="ext-container">
      <Header className="py-4 border-b-gray-stroke border-b bg-gray-dark" />
      <main className="extension-body px-4 mt-4">
        <div className="text-field border border-gray-stroke bg-gray-dark rounded p-4 text-white">
          drunk_tense_duck_bares_cupboard
        </div>
        <div className="tooltip mt-2 text-white opacity-30 text-xs flex justify-end items-center ">
          <DuplicateIcon className='w-4 h-4 text-current' />
          <span className='ml-1'>click phrase to copy</span>
        </div>
        <div className="options flex flex-col space-y-4 mt-3">
          <div className="toggle-container">  
            <Toggle label='Include Predicate' />
          </div>
          <div className="toggle-container">
            <Toggle label='Include Adverb' />
          </div>
          <div className="toggle-container">
            <Toggle label='Capitalize first word' />
          </div>
          <div className="toggle-container">
            <Toggle label="Include numbers" />
          </div>
        </div>
        <div className="button-container mt-10">
          <button className="bg-indigo text-white text-center py-4 font-bold rounded w-full">Regenrate Passphrase</button>
        </div>
      </main>
    </div>
  )
}
