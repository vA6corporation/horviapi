import { Test, TestingModule } from '@nestjs/testing';
import { TenderNodesController } from './tender-nodes.controller';

describe('TenderNodesController', () => {
  let controller: TenderNodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenderNodesController],
    }).compile();

    controller = module.get<TenderNodesController>(TenderNodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
