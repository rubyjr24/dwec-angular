import { Component } from '@angular/core';

@Component({
  selector: 'hover-button',
  imports: [],
  templateUrl: './hover-button.html',
  styleUrl: './hover-button.css',
})
export class HoverButton {

  count = 0;

  onMouseEnter () {
    console.log("Ratón sobre el botón");
  }

  onClick (){
    this.count++;
  }

}
