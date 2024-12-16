import { Module } from '@nestjs/common';
import { TemplatesInsurController } from './templates-insur.controller';
import { TemplatesModule } from 'src/templates/templates.module';

@Module({
    controllers: [TemplatesInsurController],
    imports: [TemplatesModule]
})
export class TemplatesInsurModule { }
