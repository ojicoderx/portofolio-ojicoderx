import SideBar from "./SideBar";
import TopNav from "./TopNav";
import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";

interface props {
  children: JSX.Element
}

const Layout = ({ children }: props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
    })
  })

  return (
    <div>
      {isMobile ? <div></div> : <SideBar />}

      <div className="flex w-full flex-col bg-neutral-300 dark:bg-zinc-900">
        <div className="flex flex-col">
          <TopNav />
          <div className="scrollbar h-[calc(100vh-4.5rem)] overflow-auto pb-[72px] sm:h-screen sm:pb-0 sm:pt-[4.5rem]">
            <div className="relative">{children}</div>
          </div>
          {isMobile ? <BottomNav /> : <div></div>}
        </div>
      </div>
    </div>
  )
}

export default Layout
