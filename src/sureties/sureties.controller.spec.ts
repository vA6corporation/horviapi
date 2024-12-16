import { Test, TestingModule } from '@nestjs/testing';
import { SuretiesController } from './sureties.controller';

describe('SuretiesController', () => {
  let controller: SuretiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuretiesController],
    }).compile();

    controller = module.get<SuretiesController>(SuretiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
