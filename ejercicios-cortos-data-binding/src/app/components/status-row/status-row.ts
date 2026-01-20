import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'status-row',
  imports: [NgClass],
  templateUrl: './status-row.html',
  styleUrl: './status-row.css',
})
export class StatusRow {
  active = true;
  enabled = false;
  isFirst = false;
  isLast = true;

  rowClasses = {
    'first': this.isFirst,
    'last bold': this.isLast
  };
}
