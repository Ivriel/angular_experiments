import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCRUDComponent } from './form-crud.component';

describe('FormCRUDComponent', () => {
  let component: FormCRUDComponent;
  let fixture: ComponentFixture<FormCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
