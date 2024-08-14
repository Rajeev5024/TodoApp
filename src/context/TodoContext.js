import { useContext,createContext } from "react";

export const TodoContext=createContext({
	todos:[
		{
		id:1,
		todo:"todo msg",
		completed:false,
		},
	],
	addTodo:(id)=>{},
	deleteTodo:(id)=>{},
	updateTodo:(id,todo)=>{},
	toggleComplete:(id)=>{},
});
export const TodoContextProvider=TodoContext.Provider;
export const useTodo=()=>{
	return useContext(TodoContext);
}

