'use client'

import { DropdownTrigger } from '@nextui-org/react'
import { type Session } from '@supabase/auth-helpers-nextjs'
import { IconDotsVertical } from '@tabler/icons-react'

export function DropDownTriggerClient({ session, userName }: { session: Session | null, userName: string }) {
    if (session === null) return

    return (

        <>
            {
                session?.user.user_metadata?.user_name === userName
                ? <DropdownTrigger>
                    <button className="bg-transparent border-slate-400 hover:border-slate-200 border rounded-full p-1">
                        <IconDotsVertical />
                    </button>
                </DropdownTrigger>
                : <p>Boton</p>
            }
        </>
    )
}
