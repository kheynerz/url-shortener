import { ButtonHTMLAttributes, ReactNode } from "react"

import 'src/components/Button/Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button