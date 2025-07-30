'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface MagneticScrollContextType {
  isMagneticScrollEnabled: boolean
  toggleMagneticScroll: () => void
}

const MagneticScrollContext = createContext<MagneticScrollContextType | undefined>(undefined)

export const useMagneticScroll = () => {
  const context = useContext(MagneticScrollContext)
  if (context === undefined) {
    throw new Error('useMagneticScroll must be used within a MagneticScrollProvider')
  }
  return context
}

interface MagneticScrollProviderProps {
  children: ReactNode
}

export const MagneticScrollProvider: React.FC<MagneticScrollProviderProps> = ({ children }) => {
  const [isMagneticScrollEnabled, setIsMagneticScrollEnabled] = useState(false)

  const toggleMagneticScroll = () => {
    setIsMagneticScrollEnabled(prev => !prev)
  }

  return (
    <MagneticScrollContext.Provider value={{ isMagneticScrollEnabled, toggleMagneticScroll }}>
      {children}
    </MagneticScrollContext.Provider>
  )
}