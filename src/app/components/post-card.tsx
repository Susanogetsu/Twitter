'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { IconDotsVertical, IconEdit, IconHeart, IconMessageCircle, IconRepeat, IconTrash } from '@tabler/icons-react'
import { deletePost } from "../actions/delete-post-action"
import Link from "next/link"
import { useState } from "react"
import { editPost } from "../actions/edit-post-action"
import { PostCardEditButton } from "./post-card-edit-button"
import { toast } from "sonner"
// import { type Session } from '@supabase/auth-helpers-nextjs'
// import { DropDownTriggerClient } from "./drop-down-trigger-client"

export default function PostCard({
    id,
    userId,
    userFullName,
    userName,
    avatarUrl,
    content,
    sessionId
}: {
    id: string
    userId: string
    userFullName: string
    userName: string
    avatarUrl: string
    content: string
    sessionId: string
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [isContentEditing, setIsContentEditing] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setIsContentEditing(e.target.value)
    }

    const handleDeleteAction = () => {
        deletePost(id)
        toast.success("Post eliminado correctamente")
    }

    const handleEditAction = async (formData: FormData) => {
        await editPost(formData, id)
        setIsEditing(!isEditing)
        toast.success("Post editado correctamente")
    }

    const handleEditForm = () => {
        setIsEditing(!isEditing)
        setIsContentEditing(content)
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
                {sessionId === userId &&
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <button className="bg-transparent border-slate-400 hover:border-slate-200 border rounded-full p-1">
                                <IconDotsVertical />
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions"
                            className="p-3">
                            <DropdownItem key="edit">
                                <button className="flex gap-4 w-full justify-start"
                                    onClick={handleEditForm}>
                                    <IconEdit className="w-5 h-5 mr-2" />
                                    Editar post
                                </button>
                            </DropdownItem>

                            <DropdownItem key="delete" className="text-danger" color="danger">
                                <button className="flex gap-4 w-full justify-start text-l"
                                    onClick={handleDeleteAction}>
                                    <IconTrash className="w-5 h-5 mr-2" />
                                    Eliminar post
                                </button>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                }
            </CardHeader>
            <CardBody className="px-3 py-0 text-sm text-default-500">
                {
                    isEditing
                        ? <form action={handleEditAction} >
                            <div className="flex flex-1 flex-col gap-y-4">
                                <textarea
                                    name="content"
                                    value={isContentEditing}
                                    rows={4}
                                    className="w-full h-auto min-h-[150px] text-sm text-white p-2 bg-black placeholder-gray-500"
                                    onChange={handleOnChange}
                                />
                                {
                                    isContentEditing === '' || isContentEditing === content
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
