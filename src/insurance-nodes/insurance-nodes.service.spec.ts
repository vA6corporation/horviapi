import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceNodesService } from './insurance-nodes.service';

describe('InsuranceNodesService', () => {
  let service: InsuranceNodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceNodesService],
    }).compile();

    service = module.get<InsuranceNodesService>(InsuranceNodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
