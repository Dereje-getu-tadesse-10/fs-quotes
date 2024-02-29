import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';

describe('QuoteController', () => {
  let controller: QuoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [QuoteService],
    }).compile();

    controller = module.get<QuoteController>(QuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    const result = controller.getQuote();
    expect(result).toEqual(
      expect.objectContaining({ quote: expect.any(String) }),
    );
  });
});
