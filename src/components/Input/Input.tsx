import { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction } from "react"

import 'src/components/Input/input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label : string
  onValueChange?: Dispatch<SetStateAction<string>>
}

const Input = ({label, onValueChange, ...rest} : InputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onValueChange?.(newValue)
  }

  return (
    <div className="input-container">
      <input {...rest} onChange={handleChange}/>
      <label className="input-label">
        {label}
      </label>
    </div>
  )
}

export default Input