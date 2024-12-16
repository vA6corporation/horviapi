import { Module } from '@nestjs/common';
import { OperationSuretyNodesController } from './operation-surety-nodes.controller';
import { OperationSuretyNodesService } from './operation-surety-nodes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationSuretyNode, OperationSuretyNodeSchema } from 'src/schemas/operation-surety-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: OperationSuretyNode.name, schema: OperationSuretyNodeSchema },
        ]),
    ],
    controllers: [OperationSuretyNodesController],
    providers: [OperationSuretyNodesService]
})
export class OperationSuretyNodesModule { }
