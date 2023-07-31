import { ElementType } from "react"

interface NotificationContentProps {
    icon: ElementType
    size: number
}

export function NotificationIcon({ icon: Icon, size}: NotificationContentProps) {

    return <Icon size={size} />
}