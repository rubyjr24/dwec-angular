import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverButton } from './hover-button';

describe('HoverButton', () => {
  let component: HoverButton;
  let fixture: ComponentFixture<HoverButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
