import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanciersModule } from 'src/financiers/financiers.module';
import { PartnershipsModule } from 'src/partnerships/partnerships.module';
import { Cheque, ChequeSchema } from 'src/schemas/cheque.schema';
import { ChequesController } from './cheques.controller';
import { ChequesService } from './cheques.service';
import { BusinessesModule } from 'src/businesses/businesses.module';
import { Surety, SuretySchema } from 'src/schemas/surety.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: Cheque.name, schema: ChequeSchema },
        { name: Surety.name, schema: SuretySchema }
    ]),
    PartnershipsModule,
    FinanciersModule,
    BusinessesModule,
  ],
  controllers: [ChequesController],
  providers: [ChequesService],
  exports: [ChequesService],
})
export class ChequesModule {}
