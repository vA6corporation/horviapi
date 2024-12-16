import { Module } from '@nestjs/common';
import { PartnershipsService } from './partnerships.service';
import { PartnershipsController } from './partnerships.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Partnership, PartnershipSchema } from 'src/schemas/partnership.schema';
import { PartnershipItem, PartnershipItemSchema } from 'src/schemas/partnership-item.schema';
import { BusinessesModule } from 'src/businesses/businesses.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Partnership.name, schema: PartnershipSchema },
            { name: PartnershipItem.name, schema: PartnershipItemSchema },
        ]),
        BusinessesModule,
    ],
    providers: [PartnershipsService],
    controllers: [PartnershipsController],
    exports: [PartnershipsService],
})
export class PartnershipsModule { }
