import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import counter from '../states/counterAtom'
import theme from '../states/themeAtome';

export default function ThemeChange() {
    const themeValue = useRecoilValue(theme);
    const [value, setTheme] = useRecoilState(theme);
    function handleChange(){
        if(themeValue === "light")
            setTheme("dark");
        else
            setTheme("light");
    }
    useEffect(()=>{
        localStorage.setItem("theme-key", themeValue);
    },[themeValue])
  return (
    <div>
      <h1 className={themeValue === "dark" ? "dark-theme" : "light-theme"}>{themeValue}</h1>
      <button onClick={handleChange}>Change theme</button>
    </div>
  )
}
