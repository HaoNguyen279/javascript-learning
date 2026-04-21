import { atom } from "recoil";

const todoAtom = atom({
    key:"todo",
    default:[{
        todoId : 1,
        todoTitle : "Title",
        todoContent : "Alo vu ak",
        todoStatus : false 
    }]
})

export default todoAtom