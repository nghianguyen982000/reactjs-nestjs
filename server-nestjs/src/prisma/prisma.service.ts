/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
//This service is used to connect DB
export class PrismaService extends PrismaClient{
    constructor(configService: ConfigService){
        super({
            datasources: {
                db:{
                    url:configService.get('DATABASE_URL')
                                       
                }
            }
        })
        console.log('db url :'+configService.get('DATABASE_URL'))
    }
}