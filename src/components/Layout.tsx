"use client"
import { store,persistor } from '@/redux/store'
import { SessionProvider } from 'next-auth/react'
import { PersistGate } from 'redux-persist/integration/react'


import { Provider } from 'react-redux'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <Provider store={store}>
    <PersistGate persistor={persistor}>
    <SessionProvider>
        {children}
    </SessionProvider>
    </PersistGate>
   </Provider>
  )
}

export default Layout
