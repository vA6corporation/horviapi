import { Module } from '@nestjs/common';
import { InsuranceNodesService } from './insurance-nodes.service';
import { InsuranceNodesController } from './insurance-nodes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InsuranceNode, InsuranceNodeSchema } from 'src/schemas/insurance-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: InsuranceNode.name, schema: InsuranceNodeSchema },
        ]),
    ],
    providers: [InsuranceNodesService],
    controllers: [InsuranceNodesController]
})
export class InsuranceNodesModule { }
