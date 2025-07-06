import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingComponent } from './scrolling.component';

describe('ScrollingComponent', () => {
  let component: ScrollingComponent;
  let fixture: ComponentFixture<ScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
