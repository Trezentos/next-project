import { Notification } from "..";
import { HiThumbUp } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import {  AiOutlineClose } from "react-icons/ai";

export default function FinishSession() {

    return (
        <Notification.Root>
          <Notification.Icon icon={HiThumbUp} size={24} />
          <Notification.Content text="Finalizar sessão?" />
          <Notification.Actions> 
            <Notification.Action 
              icon={HiCheck} 
              onClick={()=> console.log('Finalizado')}  
            />
            <Notification.Action 
              icon={AiOutlineClose} 
              onClick={()=> console.log('Não finalizado')}  
            />
          </Notification.Actions>
        </Notification.Root>
    )
}