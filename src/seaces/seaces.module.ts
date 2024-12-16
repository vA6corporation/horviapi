import { Module } from '@nestjs/common';
import { SeacesService } from './seaces.service';
import { SeacesController } from './seaces.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seace, SeaceSchema } from 'src/schemas/seace.schema';
import { Commercial, CommercialSchema } from 'src/schemas/commercial.schema';
import { Business, BusinessSchema } from 'src/schemas/business.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Seace.name, schema: SeaceSchema },
            { name: Commercial.name, schema: CommercialSchema },
            { name: Business.name, schema: BusinessSchema },
        ]),
    ],
    providers: [SeacesService],
    controllers: [SeacesController]
})
export class SeacesModule { }
