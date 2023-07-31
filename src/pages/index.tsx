import { Notification } from "@/components/Notification";
import { Container } from "@/styles/global";
import { HiThumbUp } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import Welcome from "@/components/Notification/Welcome";
import FinishSession from "@/components/Notification/FinishSession";
import Person from "@/components/Person";



export default function Home() {

  return (
    <>
      <Container>
        <Welcome />
        <FinishSession />
        <Person name="Gustavo" gender="male" salary={0} />
        <Person name="Sabrina" gender="female" weight={0} />
      </Container>
    </>
  )
}


