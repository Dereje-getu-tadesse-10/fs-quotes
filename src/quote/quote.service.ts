import { Injectable } from '@nestjs/common';
import { quotes } from '../../quotes';
@Injectable()
export class QuoteService {
  getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getQuotes() {
    return quotes;
  }

  getQuoteById(id: number) {
    return quotes[id];
  }
}
