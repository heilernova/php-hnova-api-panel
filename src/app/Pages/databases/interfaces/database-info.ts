export interface IDatabaseInfo{
    name:string,
    type:string,
    dataConnection:{
        hostname:string,
        username:string,
        password:string,
        database:string
    },
    description:string
}