import { ALL,ACTIVE,DONE } from '../constants/routes';
import TodoListWithData from '../containers/containers';
import {AppRoute} from './../types';

//import AuthPopup from '../authentication/auth-popup';

import {START, IN} from './../constants/auth';

import {ALL as AllStatus,DONE as DoneStatus,ACTIVE as ActiveStatus} from './../constants/status';

export const AppRoutes: AppRoute[] = [
    {
        id:'1',
        path: ALL,
        component: TodoListWithData,
        description: AllStatus,
        exact: true
    },
    {
        id:'2',
        path: ACTIVE,
        component: TodoListWithData,
        description: ActiveStatus,
        exact: true
    },
    {
        id:'3',
        path: DONE,
        component: TodoListWithData,
        description: DoneStatus,
        exact: true
    }
];

// ,
//     {
//         id:'4',
//         path: START,
//         component: AuthPopup,
//         description: IN,
//         exact: true
//     }