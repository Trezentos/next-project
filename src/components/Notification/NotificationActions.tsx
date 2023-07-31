import { ReactNode } from "react"

interface NotificationActionsProps {
    children: ReactNode
}

export function NotificationActions({ children }:NotificationActionsProps) {

    return (
        <div>
           {children}
        </div>
    )
}