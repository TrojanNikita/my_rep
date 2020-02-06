export interface Route {
    id: string;
    path: string;
    component: any;
    description: string;
    exact: boolean;
}