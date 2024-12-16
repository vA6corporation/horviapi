import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesCrecerController } from './templates-crecer.controller';

describe('TemplatesCrecerController', () => {
  let controller: TemplatesCrecerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesCrecerController],
    }).compile();

    controller = module.get<TemplatesCrecerController>(TemplatesCrecerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
