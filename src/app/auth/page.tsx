import React from 'react'
import {AuthForm} from './_components/auth-form'

type Props = {}

const AuthPage = (props: Props) => {
  return (
    <main className="flex items-center justify-center h-screen">
        <AuthForm/>
    </main>
  )
}

export default AuthPage