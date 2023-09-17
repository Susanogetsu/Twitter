import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type Database } from "../types/database"
import { redirect } from "next/navigation"
import { PostLists } from '../components/post-list'
import ComposePost from "../components/compose-post"

export default async function MiPerfil() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data } = await supabase
    .from('posts')
    .select(`* , user:users(name, user_name, avatar_url)`)
    .eq("user_id", session.user.id)
    .order('created_at', { ascending: false })

  const posts = data?.map(post => ({
    ...post,
    user: Array.isArray(post.user) ? post.user[0] : post.user
  })) ?? []

  return (
    <main className='flex min-h-screen flex-col justify-between items-center'>
      <section className="max-w-[600px] w-full min-h-screen mx-auto border-l border-r border-white/50 ">
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostLists posts={posts} />
      </section>
    </main>
  )
}
