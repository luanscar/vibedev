import { auth } from "@/services/auth";
import React from "react";
import UserInfo from "./_components/user-info";

type Props = {};

const Page = async (props: Props) => {
  const session = await auth();
  return (
    <main className="flex items-center justify-center h-screen">
      <UserInfo user={session?.user} />
    </main>
  );
};

export default Page;
