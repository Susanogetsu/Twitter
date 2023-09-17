'use client'
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react"
// import some toaster here
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            {children}
            <Toaster richColors />
        </NextUIProvider>
    )
}
