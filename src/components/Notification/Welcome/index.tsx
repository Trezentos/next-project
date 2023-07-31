import { Notification } from "..";
import { HiThumbUp } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";

export default function Welcome() {

    return (
        <Notification.Root>
            <Notification.Icon icon={HiThumbUp} size={24} />
            <Notification.Content text="Seja muito bem viado" />
            <Notification.Actions> 
            <Notification.Action 
            icon={HiCheck} 
            onClick={()=> console.log('Obrigado!')}  
            />
            </Notification.Actions>
        </Notification.Root>
    )
}