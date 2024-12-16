import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesCrecerService } from './templates-crecer.service';

describe('TemplatesCrecerService', () => {
  let service: TemplatesCrecerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplatesCrecerService],
    }).compile();

    service = module.get<TemplatesCrecerService>(TemplatesCrecerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
