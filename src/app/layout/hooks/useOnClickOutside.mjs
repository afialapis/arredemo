import { useCallback, useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    },
    [ref, handler]
  )

  useEffect(() => {
    document.body.addEventListener("click", handleClick)
    return () => {
      document.body.removeEventListener("click", handleClick)
    }
  }, [handleClick])
}
