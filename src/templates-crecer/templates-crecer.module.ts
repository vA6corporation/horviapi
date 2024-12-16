import { Module } from '@nestjs/common';
import { TemplatesCrecerController } from './templates-crecer.controller';
import { TemplatesModule } from 'src/templates/templates.module';

@Module({
    imports: [
        TemplatesModule,
    ],
    controllers: [TemplatesCrecerController],
})
export class TemplatesCrecerModule { }
