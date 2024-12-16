import { Test, TestingModule } from '@nestjs/testing';
import { MovablePropertiesController } from './movable-properties.controller';

describe('MovablePropertiesController', () => {
  let controller: MovablePropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovablePropertiesController],
    }).compile();

    controller = module.get<MovablePropertiesController>(MovablePropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
