import { Module } from '@nestjs/common';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from 'src/schemas/template.schema';
import { BusinessesModule } from 'src/businesses/businesses.module';
import { PartnershipsModule } from 'src/partnerships/partnerships.module';
import { Guarantee, GuaranteeSchema } from 'src/schemas/guarantee.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Template.name, schema: TemplateSchema },
            { name: Guarantee.name, schema: GuaranteeSchema },
        ]),
        BusinessesModule,
        PartnershipsModule,
    ],
    controllers: [TemplatesController],
    providers: [TemplatesService],
    exports: [TemplatesService]
})
export class TemplatesModule { }
