'use client'

import { createContext, useContext, useState } from "react"

import React from 'react'

const {Provider, Consumer} = createContext()

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState("EN")

  return (
    <Provider value={{ language, setLanguage }}>
        {children}
    </Provider>
  )
}

export { LanguageContextProvider, Consumer as LanguageContextConsumer }
