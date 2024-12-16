import { Test, TestingModule } from '@nestjs/testing';
import { SeacesService } from './seaces.service';

describe('SeacesService', () => {
  let service: SeacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeacesService],
    }).compile();

    service = module.get<SeacesService>(SeacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
