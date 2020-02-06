import  {Todo}  from ".";

export interface ITodosState {
    todos: Todo[];
    error:boolean;
    loading:boolean;
}