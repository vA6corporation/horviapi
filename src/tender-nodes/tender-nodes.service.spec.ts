import { Test, TestingModule } from '@nestjs/testing';
import { TenderNodesService } from './tender-nodes.service';

describe('TenderNodesService', () => {
  let service: TenderNodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenderNodesService],
    }).compile();

    service = module.get<TenderNodesService>(TenderNodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
