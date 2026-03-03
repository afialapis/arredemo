import Page from "app/layout/Page.jsx"
import { getMenuFromMdDOM } from "app/util/dom.mjs"
import { useEffect, useState } from "react"
import DocsMd from "./DocsMd.jsx"

const Docs = ({ readme }) => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    try {
      PR.prettyPrint()
    } catch (_) {}
  }, [])

  useEffect(() => {
    const nMenu = getMenuFromMdDOM()
    setMenu(nMenu)
  }, [])

  return (
    <Page menu={menu} path="docs">
      <DocsMd readme={readme} />
    </Page>
  )
}

export default Docs
