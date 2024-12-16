import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from 'src/schemas/business.schema';
import { BusinessesController } from './businesses.controller';
import { BusinessesService } from './businesses.service';
import { Experience, ExperienceSchema } from 'src/schemas/experience.schema';
import { Investment, InvestmentSchema } from 'src/schemas/investment.schema';
import { MovableProperty, MovablePropertySchema } from 'src/schemas/movable-property.schema';
import { FacilityCredit, FacilityCreditSchema } from 'src/schemas/facility-credit.schema';
import { Property, PropertySchema } from 'src/schemas/property.schema';
import { Shareholder, ShareholderSchema } from 'src/schemas/shareholder.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Business.name, schema: BusinessSchema },
            { name: Experience.name, schema: ExperienceSchema },
            { name: Investment.name, schema: InvestmentSchema },
            { name: MovableProperty.name, schema: MovablePropertySchema },
            { name: FacilityCredit.name, schema: FacilityCreditSchema },
            { name: Property.name, schema: PropertySchema }
        ])
    ],
    controllers: [BusinessesController],
    providers: [BusinessesService],
    exports: [BusinessesService]
})
export class BusinessesModule { }
