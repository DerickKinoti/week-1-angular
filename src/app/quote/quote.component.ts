import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Maya Angelou', 'And still, I rise.', 'admin', new Date(2019, 12,28)),
    new Quote(2, 'Muhamad Ali', 'What you are thinking is what you are becoming.', 'King', new Date(2020, 8, 23)),
    new Quote(3, 'Michelle Obama', 'You can’t make decisions based on fear and the possibility of what might happen.', 'Babuuh', new Date(2020, 8, 17)),
    new Quote(1, 'Nelson Mandela', 'Education is the most powerful weapon which you can use to change the world.', 'Admin', new Date(2020, 4,19)),
  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}