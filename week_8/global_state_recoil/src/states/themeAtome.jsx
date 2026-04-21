import { atom } from 'recoil'

const theme = atom({
    key : 'theme',
    default : localStorage.getItem("theme-key") == null ? "light" : localStorage.getItem("theme-key")
})

export default theme
