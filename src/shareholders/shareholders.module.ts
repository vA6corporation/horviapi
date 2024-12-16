import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Income, IncomeSchema } from 'src/schemas/income.schema';
import { Investment, InvestmentSchema } from 'src/schemas/investment.schema';
import { MovableProperty, MovablePropertySchema } from 'src/schemas/movable-property.schema';
import { Property, PropertySchema } from 'src/schemas/property.schema';
import { Shareholder, ShareholderSchema } from 'src/schemas/shareholder.schema';
import { ShareholdersController } from './shareholders.controller';
import { ShareholdersService } from './shareholders.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Shareholder.name, schema: ShareholderSchema },
            { name: Property.name, schema: PropertySchema },
            { name: MovableProperty.name, schema: MovablePropertySchema },
            { name: Income.name, schema: IncomeSchema },
            { name: Investment.name, schema: InvestmentSchema },
        ]),
    ],
    controllers: [ShareholdersController],
    providers: [ShareholdersService],
})
export class ShareholdersModule { }
