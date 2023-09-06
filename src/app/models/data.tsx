import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
async function Data() {
    const supabase = createServerComponentClient({ cookies })
    const { data: post } = await supabase
        .from("post")
        .select()

    return (
        <pre>
            {JSON.stringify(post, null, 2)}
        </pre>
    )
}

export default Data
