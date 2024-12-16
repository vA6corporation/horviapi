import { Module } from '@nestjs/common';
import { TenderNodesService } from './tender-nodes.service';
import { TenderNodesController } from './tender-nodes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TenderNode, TenderNodeSchema } from 'src/schemas/tender-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: TenderNode.name, schema: TenderNodeSchema },
        ]),
    ],
    providers: [TenderNodesService],
    controllers: [TenderNodesController]
})
export class TenderNodesModule { }
