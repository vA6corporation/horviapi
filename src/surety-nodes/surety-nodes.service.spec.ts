import { Test, TestingModule } from '@nestjs/testing';
import { SuretyNodesService } from './surety-nodes.service';

describe('SuretyNodesService', () => {
  let service: SuretyNodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuretyNodesService],
    }).compile();

    service = module.get<SuretyNodesService>(SuretyNodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
