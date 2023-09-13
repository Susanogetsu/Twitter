'use client'
import { useState } from "react"
import { addPost } from "../actions/add-post-action"
import { ComposePostButton } from "./compose-post-button"
import { Button } from "@nextui-org/react"

function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}
) {
    // variable local para cambiar el texto
    const [text, setText] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setText(e.target.value)
    }

    return (
        <form
            action={async (formData) => {
                await addPost(formData)
                setText("")
            }}
            className="flex flex-row p-2 gap-2 border-b border-white/50 border-t">
            <img src={userAvatarUrl}
                className="rounded-full w-12 h-12 object-contain" />
            <div className="flex flex-1 flex-col gap-y-4">
                <textarea
                    name="content"
                    value={text}
                    onChange={handleOnChange}
                    rows={4}
                    className="w-full min-h-[150px] max-h-[150px] text-l p-2 bg-black placeholder-gray-500"
                    placeholder="¡¿Qué está pasando?!"
                />

                {
                    text !== ''
                        ? <ComposePostButton />
                        : <Button type="submit"
                            className="bg-sky-800 text-slate-400 text-sm font-bold rounded-full px-5 py-2 self-end transition cursor-not-allowed">
                            Postear
                        </Button>
                }
            </div>
        </form>
    )
}

export default ComposePost
