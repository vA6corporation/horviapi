import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesSecrexController } from './templates-secrex.controller';

describe('TemplatesSecrexController', () => {
  let controller: TemplatesSecrexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesSecrexController],
    }).compile();

    controller = module.get<TemplatesSecrexController>(TemplatesSecrexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
