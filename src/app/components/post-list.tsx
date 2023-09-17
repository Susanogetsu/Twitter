// import { type Session } from '@supabase/auth-helpers-nextjs'
import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

export function PostLists({ posts, sessionId }: { posts: Post[] | null, sessionId: string }) {
    return (
        <>
            {
                posts?.map(post => {
                    const {
                        id,
                        user,
                        user_id: userId,
                        content
                    } = post

                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl
                    } = user

                    return (
                        <PostCard
                            id={id}
                            avatarUrl={avatarUrl}
                            userId = {userId}
                            content={content}
                            key={id}
                            userFullName={userFullName}
                            userName={userName}
                            sessionId={sessionId}
                        />
                    )
                })
            }
        </>
    )
}
