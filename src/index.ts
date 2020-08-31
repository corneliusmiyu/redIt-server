import {MikroORM} from "@mikro-orm/core";
import { prod } from "./constants";
//import{DotenvConfigOption} from "dotenv"




const main= async()=>{

    const orm=await MikroORM.init({
        dbName: 'mydb',
        // user:
        // password:
        type:'postgresql',
        debug:!prod

    }) 
}


console.log ("Hello world");