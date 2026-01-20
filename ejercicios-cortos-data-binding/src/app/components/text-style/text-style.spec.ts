import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStyle } from './text-style';

describe('TextStyle', () => {
  let component: TextStyle;
  let fixture: ComponentFixture<TextStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
