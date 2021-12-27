import { useContext,  } from 'react'
import { Context } from '../state'
import { DuplicateIcon } from '@heroicons/react/outline'
import Header from '../components/header'
import Toggle from '../components/toggle'
import generated from '../util/generate'
import InputField from '../components/inputField'

export default function Home() {
  const [state, setState] = useContext(Context)

  const handleRegen = () => {
    const previousState = state
    const newState = previousState
    newState.phrase = generated(state.options)
    setState({ ...newState })
  }

  return (
    <div className="ext-container">
      <Header className="py-4 border-b-gray-stroke border-b bg-gray-dark" />
      <main className="extension-body px-4 mt-4">
        
        <InputField />
          
        {/* <div className="tooltip mt-2 text-white opacity-30 text-xs flex justify-end items-center ">
          <DuplicateIcon className='w-4 h-4 text-current' />
          <span className='ml-1'>click phrase to copy</span>
        </div> */}
        <div className="options flex flex-col space-y-4 mt-6">
          <div className="toggle-container">  
            <Toggle label='Include Predicate' target='predicate' isDefault onClick={handleRegen} />
          </div>
          <div className="toggle-container">
            <Toggle label='Include Adverb' target='adverb' isDefault onClick={handleRegen} />
          </div>
          <div className="toggle-container">
            <Toggle label='Capitalize first word' target='cap_first' onClick={handleRegen} />
          </div>
          <div className="toggle-container">
            <Toggle label="Include numbers" target='number' onClick={handleRegen} />
          </div>
          <div className="toggle-container">
            <Toggle label="Include Punctuation" target='punctuation' onClick={handleRegen} />
          </div>
        </div>
        <div className="button-container mt-10">
          <button 
            className="bg-violet text-white text-center py-4 font-bold rounded w-full"
            onClick={handleRegen}
          >
            Regenrate Passphrase
          </button>
        </div>
      </main>
    </div>
  )
}
