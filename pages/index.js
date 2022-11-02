import { useContext,  } from 'react'
import { Context } from '../state'
import Header from '../components/header'
import Toggle from '../components/toggle'
import generated from '../util/generate'
import InputField from '../components/inputField'
import packageJson from '/package.json'

export default function Home() {
  const [state, setState] = useContext(Context)

  const handleRegen = () => {
    const previousState = state
    const newState = previousState
    newState.phrase = generated(state.options)
    setState({ ...newState })
  }

  const ToggleList = [
    
    { target: 'predicate', label: 'Include Predicate', isDefault: true }, 
    { target: 'adverb', label: 'Include Adverb', isDefault: true }, 
    { target: 'cap_first', label: 'Capitalize first word', isDefault: false }, 
    { target: 'number', label: "Include numbers", isDefault: false }, 
    { target: 'punctuation', label: "Include Punctuation", isDefault: false },
  ]

  const iconList = ['🦑', '🦈', '🦐', '🐡', '🐳', '🦀']
  const randomAnimal = () => {
    return iconList[Math.floor(Math.random()*iconList.length)]
  }

  return (
    <div className="ext-container">
      <Header className=" border-b-gray-stroke border-b bg-gray-dark" />
      <main className="extension-body px-4 mt-4">

        <section id="main" className="hidden">
          <InputField />
          
          <div className="options flex flex-col space-y-4 mt-6">
            {ToggleList.map((item, i) => (
              <div className="toggle-container" key={i}>  
                <Toggle label={item.label} target={item.target} isDefault={item.isDefault} onClick={handleRegen} />
              </div>
            ))}
          </div>

          <div className="button-container mt-10">
            <button 
              className="bg-gradient-to-tr from-indigo-900 to-violet text-white text-center py-4 font-bold rounded w-full"
              onClick={handleRegen}
            >
              Regenrate Passphrase
            </button>
          </div>
        </section>

        <section id="history" className="text-gray-400">
          <span>testy testy 123</span>
        </section>

      </main>
      <footer className="px-4 flex justify-between py-2">
        <span className="text-xs text-white">Made with {randomAnimal()} in California</span>
        <span className="text-xs text-white opacity-20">Version { packageJson.version }</span>
      </footer>
    </div>
  )
}
