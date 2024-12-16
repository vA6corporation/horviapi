import { Test, TestingModule } from '@nestjs/testing';
import { OperationSuretiesController } from './operation-sureties.controller';

describe('OperationSuretiesController', () => {
  let controller: OperationSuretiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationSuretiesController],
    }).compile();

    controller = module.get<OperationSuretiesController>(OperationSuretiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
