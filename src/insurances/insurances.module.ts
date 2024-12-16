import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from 'src/customers/customers.module';
import { FinanciersModule } from 'src/financiers/financiers.module';
import { InsuranceGroup, InsuranceGroupSchema } from 'src/schemas/insurance-group.schema';
import { Insurance, InsuranceSchema } from 'src/schemas/insurance.schema';
import { InsurancesController } from './insurances.controller';
import { InsurancesService } from './insurances.service';
import { InsuranceNode, InsuranceNodeSchema } from 'src/schemas/insurance-node.schema';

@Module({
    controllers: [InsurancesController],
    providers: [InsurancesService],
    exports: [InsurancesService],
    imports: [
        MongooseModule.forFeature([
            { name: Insurance.name, schema: InsuranceSchema },
            { name: InsuranceGroup.name, schema: InsuranceGroupSchema },
            { name: InsuranceNode.name, schema: InsuranceNodeSchema },
        ]),
        FinanciersModule,
        CustomersModule,
    ],
})
export class InsurancesModule { }
