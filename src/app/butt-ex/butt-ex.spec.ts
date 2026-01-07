import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtEx } from './butt-ex';

describe('ButtEx', () => {
  let component: ButtEx;
  let fixture: ComponentFixture<ButtEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
