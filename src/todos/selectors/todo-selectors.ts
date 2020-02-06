import { createSelector } from 'reselect';

import {GlobalState} from '../types';

import { NONE, SMALL, MIDLE, HIGH} from './../constants/filter-mode';
import { ACTIVE, DONE} from './../constants/status';
export const getTodos = (state:GlobalState) => state.todos.todos;

export const getError = (state:GlobalState) => state.todos.error;
export const getLoad = (state:GlobalState) => state.todos.loading;

export const getMode = (state:GlobalState) => state.modeStatus.mode;
export const getFilterMode = (state:GlobalState) => state.modeStatus.filter_mode;
export const getStatus = (state:GlobalState) => state.modeStatus.status;




export const getTodo=(state:GlobalState, id:number)=>state.todos.todos[id];

export const getAllTodos = createSelector(
    [getTodos,getMode,getStatus, getFilterMode],
    (allTodos,mode,status,filter_mode) => {
        console.log(mode + status + filter_mode)
        
        let newArray=allTodos;
        if(mode==='Asc')
            newArray=[...newArray].sort((a,b)=>{            
                return a.priority-b.priority;
        })
        else if(mode==='Desc')
            newArray=[...newArray].sort((a,b)=>{            
                return b.priority-a.priority;
        })
            return newArray.filter(({done})=>{
                if(status===ACTIVE)
                    return done===false;
                else if(status===DONE)
                    return done===true;
                else return true                
            }).filter(({priority})=>{
                if(filter_mode===NONE)
                    return priority===0;
                else if (filter_mode===SMALL)
                    return priority===1;
                else if (filter_mode===MIDLE)
                    return priority===2;
                else if(filter_mode===HIGH)
                    return priority===3;
                else return true;    
            })
    }
);

export const getDoneLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>el.done).length

);

export const getActiveLength=createSelector(
    getTodos,
    allTodos => allTodos.filter((el)=>!el.done).length
);



