import React, { useState } from 'react'
import Greeting from './components/Greeting'

const App = () => {
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setMessage(event.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Enter a greeting..." value={message} onChange={handleInputChange} />
      <Greeting message={message} />
    </div>
  )
}

export default App