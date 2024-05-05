import { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from "react"

import 'src/components/Input/input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label : string
  error?: string
  onValueChange?: Dispatch<SetStateAction<string>>
}

const Input = ({label, error, onValueChange, ...rest} : InputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onValueChange?.(newValue)
  }

  return (
    <div className={`input-container${error ? " input-error" : ''}`}>
      <input {...rest} onChange={handleChange}/>
      <label className="input-label">
        {label}
      </label>
      <p>{error}</p>
    </div>
  )
}

export default Input