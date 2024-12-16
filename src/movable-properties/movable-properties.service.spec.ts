import { Test, TestingModule } from '@nestjs/testing';
import { MovablePropertiesService } from './movable-properties.service';

describe('MovablePropertiesService', () => {
  let service: MovablePropertiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovablePropertiesService],
    }).compile();

    service = module.get<MovablePropertiesService>(MovablePropertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
