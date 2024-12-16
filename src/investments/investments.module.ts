import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Investment, InvestmentSchema } from 'src/schemas/investment.schema';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Investment.name, schema: InvestmentSchema }]),
  ],
  controllers: [InvestmentsController],
  providers: [InvestmentsService]
})
export class InvestmentsModule {}
