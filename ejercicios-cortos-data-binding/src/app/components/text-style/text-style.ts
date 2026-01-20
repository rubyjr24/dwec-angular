import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'text-style',
  imports: [NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {
  fontSize = 20;
  isError = true;
  selected = true;

  cardStyles = {
    "border": `1px solid ${this.selected ? "blue" : "gray"}` 
  }
}
