export type Entity<ID extends number | string >={
    id:ID;
};

export type TPagination = {
    filter:string;
    page?:number;
    limit?:number;
    sortBy?:string;
    totalPages?:number;
    sort?:string;
    total?:number;
    uffset?:number;
};

export enum Errors {
   
NO_DATA_FOUND= "NoDatafound",
INTERNAL_SERVER_ERROR="InternalServerError",
UNAUTHORIZED="UnAuthorized",
MISSING_FIELDS="MissingFields",
RECORD_NOT_REGISTER="RecordNotRegister",
}
export type TStatus=Entity<number>&{
description?:string;
}

export type TJson ={
    [x:string]:any
}

export type TJsonArray = TJson[];