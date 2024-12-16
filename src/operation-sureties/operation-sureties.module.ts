import { Module } from '@nestjs/common';
import { OperationSuretiesController } from './operation-sureties.controller';
import { OperationSuretiesService } from './operation-sureties.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationSurety, OperationSuretySchema } from 'src/schemas/operation-surety.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: OperationSurety.name, schema: OperationSuretySchema },
        ]),
    ],
    controllers: [OperationSuretiesController],
    providers: [OperationSuretiesService]
})
export class OperationSuretiesModule { }
