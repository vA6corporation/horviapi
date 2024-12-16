import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Financier, FinancierSchema } from '../schemas/financier.schema';
import { FinanciersController } from './financiers.controller';
import { FinanciersService } from './financiers.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Financier.name, schema: FinancierSchema }
        ]),
    ],
    providers: [FinanciersService],
    controllers: [FinanciersController],
    exports: [FinanciersService],
})
export class FinanciersModule { }
