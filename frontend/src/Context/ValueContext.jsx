import React, { createContext } from 'react'
import { useState } from 'react'

export const ValueContext = createContext()

export default function ValueContextProvider({ children }) {
    const [isUpdate, setIsUpdate] = useState(false)


    return (
        <ValueContext.Provider value={{ isUpdate, setIsUpdate }}>
            {children}
        </ValueContext.Provider>
    )
}
