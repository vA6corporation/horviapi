import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesSecrexService } from './templates-secrex.service';

describe('TemplatesSecrexService', () => {
  let service: TemplatesSecrexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplatesSecrexService],
    }).compile();

    service = module.get<TemplatesSecrexService>(TemplatesSecrexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
