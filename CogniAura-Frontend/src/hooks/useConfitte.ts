import { useCallback, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

export const useConfetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false)

  const startConfetti = useCallback(() => {
    setIsConfettiActive(true)
  }, [])

  useEffect(() => {
    if (isConfettiActive) {
      const duration = 3 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
      }

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          setIsConfettiActive(false)
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        )
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        )
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isConfettiActive])

  return { startConfetti }
}

