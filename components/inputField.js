import { DuplicateIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Context } from "../state";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const InputField = (props) => {
  const [state, setState] = useContext(Context)
  const [copied, setCopied] = useState({ copied: false })

  const handleCopied = () => {
    setCopied({ copied: true })
    setTimeout(() => {
      setCopied({ copied: false })
    }, 2000)
  }

  return (
    <div className="w-full font-mono text-field border border-gray-stroke bg-gray-dark rounded p-4 text-white break-words flex flex-col">
      <span className="opacity-80 block">{state.phrase}</span>
      <CopyToClipboard
        text={state.phrase}
        onCopy={handleCopied}
      >
        <div className="flex justify-end items-center font-sans space-x-2">
          <span className={classNames(copied.copied ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-2', 'text-xs text-green-200 transition duration-200')}>
            Copied to clipboard
          </span>
          <div className="copy-wrapper p-1 border border-gray-stroke self-end rounded bg-white bg-opacity-5 hover:bg-opacity-10 transition duration-200 cursor-pointer">
            <DuplicateIcon className="w-4 h-4 text-current" />
            <span className="sr-only">Click to copy</span>
          </div>
        </div>
      </CopyToClipboard>
    </div>

  );
}

export default InputField;