import { Component, Input } from '@angular/core';

@Component({
  selector: 'notice-item',
  imports: [],
  templateUrl: './notice-item.html',
  styleUrl: './notice-item.css',
})
export class NoticeItem {
  @Input() notice!: any;
}
