interface NotificationContentProps {
    text: string
}

export function NotificationContent({ text }: NotificationContentProps) {

    return (<div><p>{text}</p></div>)
}