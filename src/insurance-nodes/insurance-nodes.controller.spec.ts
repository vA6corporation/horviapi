import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceNodesController } from './insurance-nodes.controller';

describe('InsuranceNodesController', () => {
  let controller: InsuranceNodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceNodesController],
    }).compile();

    controller = module.get<InsuranceNodesController>(InsuranceNodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
