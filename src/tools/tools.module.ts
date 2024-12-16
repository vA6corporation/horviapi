import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from 'src/schemas/business.schema';
import { Partnership, PartnershipSchema } from 'src/schemas/partnership.schema';
import { TendersModule } from 'src/tenders/tenders.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Business.name, schema: BusinessSchema },
            { name: Partnership.name, schema: PartnershipSchema }
        ]),
        TendersModule
    ],
    controllers: [ToolsController],
    providers: [ToolsService]
})
export class ToolsModule { }
