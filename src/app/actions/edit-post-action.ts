'use server'
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"

export const editPost = async (formData: FormData, id: string) => {
    const content = formData.get('content')?.toString()
    if (content === '' || content === null) return

    const supabase = createServerActionClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return

    await supabase.from("posts").update({
        content
    })
    .eq("id", id)
    console.log(`Editando post #${id}, con los datos: ${content}`)

    revalidatePath(`/?content=${content}`)
}
