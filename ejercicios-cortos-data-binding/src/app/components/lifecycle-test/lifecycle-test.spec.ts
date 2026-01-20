import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleTest } from './lifecycle-test';

describe('LifecycleTest', () => {
  let component: LifecycleTest;
  let fixture: ComponentFixture<LifecycleTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
