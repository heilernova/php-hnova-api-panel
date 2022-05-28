export interface IRouteInfo{
    path:string,
    description:string,
    database:string,
    disable:boolean,
    cors:{
        origin: string|null|string[],
        headers: string|null|string[],
        methods: string|null|string[]
    }
}