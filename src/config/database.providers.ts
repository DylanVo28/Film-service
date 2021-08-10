import { TypeOrmModuleOptions } from "@nestjs/typeorm";
const dotenv=require('dotenv');

   
    if(process.env.NODE_ENV!=='PRODUCTION'){
        dotenv.config({path:'config/config.env'})
      }
     
export const databaseProviders: TypeOrmModuleOptions={
    type:'postgres',
    host: process.env.POSTGRESQL_ADDON_HOST,
    port: +process.env.POSTGRESQL_ADDON_PORT,
    username: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DB,
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize:true
}