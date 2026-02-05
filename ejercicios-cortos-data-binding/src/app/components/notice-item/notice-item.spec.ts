import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeItem } from './notice-item';

describe('NoticeItem', () => {
  let component: NoticeItem;
  let fixture: ComponentFixture<NoticeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
