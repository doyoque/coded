import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

describe('CatController', () => {
  let catController: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).compile();

    catController = module.get<CatController>(CatController);
  });

  describe('root', () => {
    it('should return "this is a cat"', () => {
      expect(catController.index()).toBe('this is a cat');
    });

    it('should be defined', () => {
      expect(catController).toBeDefined();
    });
  });
});
