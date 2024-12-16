import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesInsurController } from './templates-insur.controller';

describe('TemplatesInsurController', () => {
  let controller: TemplatesInsurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesInsurController],
    }).compile();

    controller = module.get<TemplatesInsurController>(TemplatesInsurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
