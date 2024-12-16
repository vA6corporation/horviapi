import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovableProperty, MovablePropertySchema } from 'src/schemas/movable-property.schema';
// import { MovableProperty, MovablePropertySchema } from 'src/schemas/movable-property';
import { MovablePropertiesController } from './movable-properties.controller';
import { MovablePropertiesService } from './movable-properties.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MovableProperty.name, schema: MovablePropertySchema }]),
  ],
  controllers: [MovablePropertiesController],
  providers: [MovablePropertiesService]
})
export class MovablePropertiesModule {}
