import { ButtonHTMLAttributes, ElementType } from "react"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

export function NotificationAction({ onClick, icon: Icon, ...rest }:NotificationActionProps) {
    return (
        <button {...rest} onClick={onClick}>
            <Icon />
        </button>
    )
}