import { Test, TestingModule } from '@nestjs/testing';
import { OperationSuretyNodesService } from './operation-surety-nodes.service';

describe('OperationSuretyNodesService', () => {
  let service: OperationSuretyNodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationSuretyNodesService],
    }).compile();

    service = module.get<OperationSuretyNodesService>(OperationSuretyNodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
