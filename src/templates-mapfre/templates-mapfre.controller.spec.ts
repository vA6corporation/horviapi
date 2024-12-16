import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesMapfreController } from './templates-mapfre.controller';

describe('TemplatesMapfreController', () => {
  let controller: TemplatesMapfreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesMapfreController],
    }).compile();

    controller = module.get<TemplatesMapfreController>(TemplatesMapfreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
