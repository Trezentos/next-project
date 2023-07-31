type PersonProps = {
    name: string
} & (MaleProps| FemaleProps)

type MaleProps = {
    gender: 'male'
    salary: number
}

type FemaleProps = {
    gender: 'female'
    weight: number
}

export default function Person(props: PersonProps) {

    if (props.gender === 'female') {
        console.log(props.weight)
    }

    if (props.gender === 'male') {
        console.log(props.salary)
    }

    return (
        <div></div>
    )
}