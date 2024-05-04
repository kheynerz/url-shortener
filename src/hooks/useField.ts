import { useState } from "react"

interface UseField {
    type?: string
    name?: string
}

const useField = ({name, type = "text"}: UseField) => {
    const [value, onValueChange] = useState("")
    return {type, name, value, onValueChange}
}

export default useField