'use client'

import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page() {
    const { data: session} = useSession();

    if (!session) {
        redirect('../Login');
    }else if(session.user?.image){
        return (
            <>
                <img src={session.user?.image}/>
                <div>
                    Hi {session.user?.name}! your email address is: {session.user?.email}
                </div>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </>
        )
    }else {
        return (
            <>
                <div>
                    Hi {session.user?.name}! your email address is: {session.user?.email}
                </div>
                
            </>
        )
    }
}