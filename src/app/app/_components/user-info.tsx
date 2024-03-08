'use client'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  user: Session['user']
};

const UserInfo = ({user}: Props) => {
  if (!user) return
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
        <Avatar>
          <AvatarFallback>
            US
          </AvatarFallback>
        </Avatar>
        <span>{user?.email}</span>

        <Button onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
  );
};

export default UserInfo;
