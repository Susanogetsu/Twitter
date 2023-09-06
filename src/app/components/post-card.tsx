'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react"
import { IconHeart, IconMessageCircle, IconRepeat, IconTrash } from '@tabler/icons-react'
import { deletePost } from "../actions/delete-post-action"
import Link from "next/link"

export default function PostCard({
    id,
    userFullName,
    userName,
    avatarUrl,
    content
}: {
    id: string
    userFullName: string
    userName: string
    avatarUrl: string
    content: string
}) {
    return (
        <Card className="bg-transparent shadow-none
         hover:bg-slate-800 transition border-b border-white/50 cursor-pointer rounded-none">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Link href={`/${userName}`}>
                        <Avatar isBordered radius="full" size="md" src={avatarUrl} />
                    </Link>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{userName} </h5>
                    </div>
                </div>
                <div className="flex gap-1">
                    {/* <button onClick={() => {
                        getOnePost(id)
                    }}>
                        <IconEdit className="w-5 h-5 hover:text-sky-700" />
                    </button> */}
                    <button onClick={() => {
                        deletePost(id)
                    }}>
                        <IconTrash className="w-5 h-5 hover:text-red-700" />
                    </button>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {content}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <button>
                    <IconMessageCircle className="h-4 w-4" />
                </button>
                <button>
                    <IconHeart className="h-4 w-4" />
                </button>
                <button>
                    <IconRepeat className="h-4 w-4" />
                </button>

            </CardFooter>
        </Card>
    )
}
