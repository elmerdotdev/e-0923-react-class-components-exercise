type Props = {
  message: string
}

const Greeting = ({ message }: Props) => {
  return (
    <h1>{message}</h1>
  )
}

export default Greeting