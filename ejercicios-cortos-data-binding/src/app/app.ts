import { Component, signal } from '@angular/core';
import { UserProfile } from './components/user-profile/user-profile';
import { TextStyle } from './components/text-style/text-style';
import { StatusRow } from './components/status-row/status-row';
import { HoverButton } from './components/hover-button/hover-button';
import { SearchBox } from "./components/search-box/search-box";
import { PriceView } from "./components/price-view/price-view";
import { EventList } from "./components/event-list/event-list";
import { LifecycleTest } from "./components/lifecycle-test/lifecycle-test";

@Component({
  selector: 'app-root',
  imports: [UserProfile, TextStyle, StatusRow, HoverButton, SearchBox, PriceView, EventList, LifecycleTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicios-cortos-data-binding');
}
