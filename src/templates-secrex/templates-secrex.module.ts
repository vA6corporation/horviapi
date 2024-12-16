import { Module } from '@nestjs/common';
import { TemplatesSecrexController } from './templates-secrex.controller';
import { TemplatesSecrexService } from './templates-secrex.service';
import { BusinessesModule } from 'src/businesses/businesses.module';
import { TemplatesModule } from 'src/templates/templates.module';
import { PartnershipsModule } from 'src/partnerships/partnerships.module';

@Module({
    imports: [
        BusinessesModule,
        PartnershipsModule,
        TemplatesModule,
    ],
    controllers: [TemplatesSecrexController],
    providers: [TemplatesSecrexService]
})
export class TemplatesSecrexModule { }
