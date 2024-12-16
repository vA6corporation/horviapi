import { Module } from '@nestjs/common';
import { SeaceNodesController } from './seace-nodes.controller';
import { SeaceNodesService } from './seace-nodes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeaceNode, SeaceNodeSchema } from 'src/schemas/seace-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: SeaceNode.name, schema: SeaceNodeSchema },
        ]),
    ],
    controllers: [SeaceNodesController],
    providers: [SeaceNodesService]
})
export class SeaceNodesModule { }
