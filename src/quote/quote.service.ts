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

  // TODO: add method to get quote by id
  getQuoteById(id: number) {}
}
