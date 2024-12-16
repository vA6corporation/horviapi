import { Test, TestingModule } from '@nestjs/testing';
import { SuretyNodesController } from './surety-nodes.controller';

describe('SuretyNodesController', () => {
  let controller: SuretyNodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuretyNodesController],
    }).compile();

    controller = module.get<SuretyNodesController>(SuretyNodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
