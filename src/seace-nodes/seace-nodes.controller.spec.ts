import { Test, TestingModule } from '@nestjs/testing';
import { SeaceNodesController } from './seace-nodes.controller';

describe('SeaceNodesController', () => {
  let controller: SeaceNodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeaceNodesController],
    }).compile();

    controller = module.get<SeaceNodesController>(SeaceNodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
