import { Module } from '@nestjs/common';
import { TemplatesModule } from 'src/templates/templates.module';
import { TemplatesMapfreController } from './templates-mapfre.controller';

@Module({
  controllers: [TemplatesMapfreController],
  imports: [TemplatesModule],
})
export class TemplatesMapfreModule {}
