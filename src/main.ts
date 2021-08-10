import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const dotenv=require('dotenv');
async function bootstrap() {

 if(process.env.NODE_ENV!=='PRODUCTION'){
  dotenv.config({path:'config/config.env'})
}
  const app = await NestFactory.create(AppModule,{cors:true});
  
  await app.listen(3000);
}
bootstrap();
