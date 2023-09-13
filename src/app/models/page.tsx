import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type Database } from "../types/database"

async function Data() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: post } = await supabase.from('posts')
        .select(`* , user:users(name, user_name, avatar_url)`)
    console.log(post)

    return (
        <pre className="flex justify-center py-10">
            {JSON.stringify(post, null, 2)}
        </pre>
    )
}

export default Data
