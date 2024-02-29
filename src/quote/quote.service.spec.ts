import { Test, TestingModule } from '@nestjs/testing';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [QuoteService],
    }).compile();

    service = module.get<QuoteService>(QuoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getQuote should return quote', () => {
    const result = service.getQuote();
    expect(result).toEqual(
      expect.objectContaining({ quote: expect.any(String) }),
    );
  });
});
