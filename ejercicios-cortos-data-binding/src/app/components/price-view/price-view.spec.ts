import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceView } from './price-view';

describe('PriceView', () => {
  let component: PriceView;
  let fixture: ComponentFixture<PriceView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
