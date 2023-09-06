'use server'
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"

// export const getOnePost = async (id: string) => {
//     const supabase = createServerActionClient({ cookies })
//     const content: any = await supabase
//     .from('posts')
//     .select('content')
//     .eq('id', id)
//     revalidatePath('/')
//     return (
//         <textarea
//         name="content"
//         value={content}
//         rows={4}
//         className="w-full min-h-[150px] max-h-[150px] text-l p-2 bg-black placeholder-gray-500"
//         placeholder="¡¿Qué está pasando?!"
//     />
//     )
// }

export const editPost = async (formData: FormData, id: string) => {
    const content = formData.get('content')
    if (content === '' || content === null) return

    const supabase = createServerActionClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return

    await supabase.from('posts').update({
        content
    }).eq('id', id)

    revalidatePath(`/?content=${content.toString()}`)
}
