import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Operation, OperationSchema } from 'src/schemas/operation.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Operation.name, schema: OperationSchema },
        ])
    ],
    providers: [OperationsService],
    controllers: [OperationsController],
})
export class OperationsModule { }
