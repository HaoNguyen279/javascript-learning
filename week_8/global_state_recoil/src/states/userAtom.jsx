import { atom } from "recoil";


const user = atom({
    key: "user",
    default : {
        status : false,
        userName : ""
    }
    
})

export default user