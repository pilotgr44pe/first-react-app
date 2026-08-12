import { useState } from 'react'

type LikeButtonProps = {
  label: string
}

function LikeButton({ label }: LikeButtonProps) {
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
    <button onClick={handleClick}>
      {label}: {isLiked ? "❤️" : "🤍"} {count} likes
    </button>
  )
}

export default LikeButton