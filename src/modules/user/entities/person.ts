import { Entity,TStatus } from "../../../kernel/types";

export type TPerson = Entity<number>& {
username:string;
password?:string;
status?:TStatus;
person?:any;
}