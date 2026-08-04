import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  function handleClick() {

  if (isLiked) {
    setCount(count - 1)
  } else {
    setCount(count + 1)
  }
  setIsLiked(!isLiked)

  }

  return (
    <>
      <h1>Hello, world</h1>
      <button onClick={handleClick}>
        {isLiked ? "❤️" : "🤍"} {count} likes
      </button>
    </>
  )
}



export default App