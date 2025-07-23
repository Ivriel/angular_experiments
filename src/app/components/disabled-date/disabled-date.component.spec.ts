import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDateComponent } from './disabled-date.component';

describe('DisabledDateComponent', () => {
  let component: DisabledDateComponent;
  let fixture: ComponentFixture<DisabledDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabledDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
