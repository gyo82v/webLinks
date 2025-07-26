import {useState} from "react"

import Images from "./components/categories/Images"
import Styles from "./components/categories/Styles"
import Coding from "./components/categories/Coding"
import Minsc from "./components/categories/Minsc"
import Social from "./components/categories/Social"
import Websites from "./components/categories/Websites"
import YouTube from "./components/categories/YouTube"
import Css from "./components/categories/Css"

function App() {
  const [open, setOpen] = useState(
  { styles : true,
    coding : true,
    misc : true,
    img : true,
    social : true,
    web : true,
    youTube : true,
    css : true
  })

  const toggleOpen = c => setOpen(p => ({...p, [c] : !p[c] }))
  
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <header className="bg-orange-200 p-4 text-center font-bold text-orange-800">
        <h1>Webs</h1>
      </header>
      <main className="flex-1 flex flex-col p-3">
        <Styles open={open.styles} toggle={() => toggleOpen("styles")} />
        <Coding open={open.coding} toggle={() => toggleOpen("coding")} />
        <Images open={open.img} toggle={() => toggleOpen("img")} />
        <Minsc open={open.misc} toggle={() => toggleOpen("misc")}  />
        <Social open={open.social} toggle={() => toggleOpen("social")} />
        <Websites open={open.web} toggle={() => toggleOpen("web")} />
        <YouTube open={open.youTube} toggle={() => toggleOpen("youtube")} />
        <Css open={open.css} toggle={() => toggleOpen("css")} />
      </main>
      <footer className="bg-orange-200 p-4 text-center font-semibold text-orange-800">
        <p>@2025 webs</p>
      </footer>
    </div>
  )
}

export default App
