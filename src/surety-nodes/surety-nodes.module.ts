import { Module } from '@nestjs/common';
import { SuretyNodesController } from './surety-nodes.controller';
import { SuretyNodesService } from './surety-nodes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuretyNode, SuretyNodeSchema } from 'src/schemas/surety-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: SuretyNode.name, schema: SuretyNodeSchema },
        ]),
    ],
    controllers: [SuretyNodesController],
    providers: [SuretyNodesService]
})
export class SuretyNodesModule { }
