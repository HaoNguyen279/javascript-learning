import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import IncreaseCounterComponent from './components/IncreaseCounterComponent'
import DecreaseCounterComponent from './components/DecreaseCounterComponent'
import ThemeChange from './components/ThemeChange'
import { useRecoilValue } from 'recoil'
import themeAtom from './states/themeAtome'
import UserProfileComponent from './components/UserProfileComponent'

function App() {
  const [count, setCount] = useState(0)
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      <div className={theme === "dark" ? 'dark-theme' : "light-theme"}>
        <IncreaseCounterComponent/>
        <DecreaseCounterComponent/>
        <ThemeChange/>
        <UserProfileComponent/>
      </div>
    </>
  )
}

export default App
