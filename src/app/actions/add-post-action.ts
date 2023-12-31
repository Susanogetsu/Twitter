'use server'
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"

export const addPost = async (formData: FormData) => {
    const content = formData.get("content")
    if (content === '' || content === null) return

    const supabase = createServerActionClient({ cookies })

    // revisar que el usuario este autentificado
    const { data: { user } } = await supabase.auth.getUser()

    if (user === null) return

    await supabase.from("posts").insert({
        content,
        user_id: user.id
    })
    console.log(`Creando post con los datos: ${content.toString()}`)
    revalidatePath(`/?content=${content.toString()}`)
}
