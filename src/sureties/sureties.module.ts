import { Module } from '@nestjs/common';
import { SuretiesController } from './sureties.controller';
import { SuretiesService } from './sureties.service';
import { Surety, SuretySchema, SuretyStatusUpdate, SuretyStatusUpdateSchema } from 'src/schemas/surety.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnershipsModule } from 'src/partnerships/partnerships.module';
import { BusinessesModule } from 'src/businesses/businesses.module';
import { BeneficiariesModule } from 'src/beneficiaries/beneficiaries.module';
import { FinanciersModule } from 'src/financiers/financiers.module';
import { Cheque, ChequeSchema } from 'src/schemas/cheque.schema';
import { Deposit, DepositSchema } from 'src/schemas/deposit.schema';
import { Payment, PaymentSchema } from 'src/schemas/payment.schema';
import { Tender, TenderSchema } from 'src/schemas/tender.schema';
import { SuretyNode, SuretyNodeSchema } from 'src/schemas/surety-node.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Surety.name, schema: SuretySchema },
            { name: SuretyNode.name, schema: SuretyNodeSchema },
            { name: Tender.name, schema: TenderSchema },
            { name: SuretyStatusUpdate.name, schema: SuretyStatusUpdateSchema },
            { name: Cheque.name, schema: ChequeSchema },
            { name: Deposit.name, schema: DepositSchema },
            { name: Payment.name, schema: PaymentSchema }
        ]),
        PartnershipsModule,
        BusinessesModule,
        BeneficiariesModule,
        FinanciersModule,
    ],
    controllers: [SuretiesController],
    providers: [SuretiesService],
    exports: [SuretiesService],
})
export class SuretiesModule { }
