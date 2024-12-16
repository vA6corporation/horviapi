import { Module } from '@nestjs/common';
import { CommercialsController } from './commercials.controller';
import { CommercialsService } from './commercials.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Commercial, CommercialSchema } from 'src/schemas/commercial.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Commercial.name, schema: CommercialSchema }])
    ],
    controllers: [CommercialsController],
    providers: [CommercialsService]
})
export class CommercialsModule { }
