import { Test, TestingModule } from '@nestjs/testing';
import { SeaceNodesService } from './seace-nodes.service';

describe('SeaceNodesService', () => {
  let service: SeaceNodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeaceNodesService],
    }).compile();

    service = module.get<SeaceNodesService>(SeaceNodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
