import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExample2Component } from './dialog-example2.component';

describe('DialogExample2Component', () => {
  let component: DialogExample2Component;
  let fixture: ComponentFixture<DialogExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogExample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
