import { Navigation } from './components/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export async function LayoutProvider({ children }: { children: React.ReactNode }) {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    if (session !== null) {
        return (
            <>
                <Navigation />
                {children}
            </>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}
