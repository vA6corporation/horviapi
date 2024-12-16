import { Test, TestingModule } from '@nestjs/testing';
import { SuretiesService } from './sureties.service';

describe('SuretiesService', () => {
  let service: SuretiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuretiesService],
    }).compile();

    service = module.get<SuretiesService>(SuretiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
