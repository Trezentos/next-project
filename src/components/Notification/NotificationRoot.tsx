import { ReactNode } from "react"
import { Container } from "./styles"

interface NotificatioRootProps {
    children: ReactNode
}

export function NotificatioRoot({ children }: NotificatioRootProps) {
    return (
        <Container>{children}</Container>
    )
}