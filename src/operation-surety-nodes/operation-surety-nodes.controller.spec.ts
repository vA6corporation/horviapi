import { Test, TestingModule } from '@nestjs/testing';
import { OperationSuretyNodesController } from './operation-surety-nodes.controller';

describe('OperationSuretyNodesController', () => {
  let controller: OperationSuretyNodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationSuretyNodesController],
    }).compile();

    controller = module.get<OperationSuretyNodesController>(OperationSuretyNodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
