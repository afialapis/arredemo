import { useCallback, useEffect } from "react"

export const useOnClickOutside = (pageRef, ref, handler) => {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    },
    [ref, handler]
  )
  /*
  useEffect(() => {
    if (!pageRef?.current) return

    pageRef.current.addEventListener("click", handleClick)
    return () => {
      pageRef.current.removeEventListener("click", handleClick)
    }
  }, [pageRef, handleClick])
  */

  useEffect(() => {
    document.body.addEventListener("click", handleClick)
    return () => {
      document.body.removeEventListener("click", handleClick)
    }
  }, [handleClick])
}
