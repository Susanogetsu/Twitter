import { Button } from "@nextui-org/react"
import { useState } from "react"

function FollowButton() {
    const [isFollowed, setIsFollowed] = useState(false)
    return (
        <Button
            className={isFollowed ? "bg-transparent px-2.5 text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => { setIsFollowed(!isFollowed) }}
        >
            {isFollowed ? "Unfollow" : "Follow"}
        </Button>
    )
}

export default FollowButton
