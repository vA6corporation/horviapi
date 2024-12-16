import { Test, TestingModule } from '@nestjs/testing';
import { OperationSuretiesService } from './operation-sureties.service';

describe('OperationSuretiesService', () => {
  let service: OperationSuretiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationSuretiesService],
    }).compile();

    service = module.get<OperationSuretiesService>(OperationSuretiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
