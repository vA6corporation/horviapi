import { Module } from '@nestjs/common';
import { TendersController } from './tenders.controller';
import { TendersService } from './tenders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tender, TenderSchema } from 'src/schemas/tender.schema';
import { BusinessesModule } from 'src/businesses/businesses.module';
import { PartnershipsModule } from 'src/partnerships/partnerships.module';
import { BeneficiariesModule } from 'src/beneficiaries/beneficiaries.module';
import { FinanciersModule } from 'src/financiers/financiers.module';
import { SuretiesModule } from 'src/sureties/sureties.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Tender.name, schema: TenderSchema },
        ]),
        BusinessesModule,
        PartnershipsModule,
        BeneficiariesModule,
        FinanciersModule,
        SuretiesModule,
    ],
    controllers: [TendersController],
    providers: [TendersService],
    exports: [TendersService]
})
export class TendersModule { }
