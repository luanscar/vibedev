import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { auth } from '@/services/auth'
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const session = await auth()
  return (
    <main className='flex items-center justify-center h-screen' >
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Avatar>
          <AvatarFallback>
            US
          </AvatarFallback>
        </Avatar>
        <span>{session?.user?.email}</span>

        <Button onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </main>
  )
}

export default Page