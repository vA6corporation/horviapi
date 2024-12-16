import { Test, TestingModule } from '@nestjs/testing';
import { SeacesController } from './seaces.controller';

describe('SeacesController', () => {
  let controller: SeacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeacesController],
    }).compile();

    controller = module.get<SeacesController>(SeacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
