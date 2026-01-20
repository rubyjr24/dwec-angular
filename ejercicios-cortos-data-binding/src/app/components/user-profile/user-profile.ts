import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  profileImage = 'avatar.png';
  isPremium = true;
}
