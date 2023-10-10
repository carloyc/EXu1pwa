import { Client } from "pg";
import Pool from "pg-pool";
require( 'dotenv').config();

const config : Pool.Config<Client> ={
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    //ssl: true,
    max: 5, // set pool max size to 20
    //idleTimeoutMillis: 1000, // close idle clients after 1 second
    //connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    //maxUses: 7500,
};

export const pool = new Pool(config);