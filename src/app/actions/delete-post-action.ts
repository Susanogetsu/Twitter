'use server'
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"

export const deletePost = async (id: string) => {
    if (id === null) return
    const supabase = createServerActionClient({ cookies })
    await supabase.from('posts').delete().eq('id', id)
    console.log(`Eliminando post con el id: ${id}`)
    revalidatePath('/')
}
