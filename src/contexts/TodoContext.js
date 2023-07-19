import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) =>{
    const [filter,setFilter] = useState('')
    const [todos, setTodos] = useState([{
        id: 1,
        text:'Learn React :)',
        completed : false
    }])
    const toogleTodo = (id) =>{
        const cloned = [...todos]
        const itemIndex = cloned.findIndex(todo => todo.id === id)
        const item = todos[itemIndex]
        item.completed = !item.completed;
        setTodos(cloned)
    }
    const toogleDestroy = (id) =>{
        const cloned = [...todos]
        const itemIndex = cloned.findIndex((todo) => todo.id === id)
        cloned.splice(itemIndex,1)
        setTodos(cloned) 
    }
    const values = {
        todos,
        setTodos,
        toogleDestroy,
        toogleTodo,
        filter,
        setFilter
    }
return <TodoContext.Provider value={values}>{children}
</TodoContext.Provider>

}
export const useTodo = () =>{
    const context = useContext(TodoContext)
    if(context === undefined){
        throw new Error('useTodo hook must be call inside TodoProvider component')
    }
    return context
}
