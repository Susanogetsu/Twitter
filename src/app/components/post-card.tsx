'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react"
import { IconEdit, IconHeart, IconMessageCircle, IconRepeat, IconTrash } from '@tabler/icons-react'
import { deletePost } from "../actions/delete-post-action"
import Link from "next/link"
import { useState } from "react"
import { editPost } from "../actions/edit-post-action"
import { PostCardEditButton } from "./post-card-edit-button"

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
    const [isEditing, setIsEditing] = useState(true)
    const [isContentEditing, setIsContentEditing] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setIsContentEditing(e.target.value)
    }

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
                    <button onClick={() => {
                        setIsEditing(!isEditing)
                        setIsContentEditing(content)
                    }}>
                        <IconEdit className="w-5 h-5 hover:text-sky-700" />
                    </button>
                    <button onClick={() => {
                        deletePost(id)
                    }}>
                        <IconTrash className="w-5 h-5 hover:text-red-700" />
                    </button>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-sm text-default-500">
                {
                    !isEditing
                        ? <form action={async (formData) => {
                            await editPost(formData, id)
                            setIsEditing(!isEditing)
                        }} >
                            <div className="flex flex-1 flex-col gap-y-4">
                                <textarea
                                    name="content"
                                    value={isContentEditing}
                                    rows={4}
                                    className="w-full h-auto min-h-[150px] text-sm text-white p-2 bg-black placeholder-gray-500"
                                    onChange={handleOnChange}
                                />
                                {
                                    isContentEditing === ''
                                        ? <Button
                                            className="bg-sky-800 text-slate-400 text-sm font-bold rounded-full px-5 py-2 self-end transition cursor-not-allowed">
                                            Guardar
                                        </Button>
                                        : <PostCardEditButton />
                                }
                            </div>
                        </form>
                        : <p>
                            {content}
                        </p>
                }
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
