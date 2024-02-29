import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('q')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getQuote() {
    return this.quoteService.getQuote();
  }

  @Get('all')
  getQuotes() {
    return this.quoteService.getQuotes();
  }

  @Get('/:id')
  getQuoteById(@Param('id', ParseIntPipe) id: number) {
    return this.quoteService.getQuoteById(id);
  }
}
