import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'price-view',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './price-view.html',
  styleUrl: './price-view.css',
})
export class PriceView {
  price = 49.99;
  today = new Date();
}
