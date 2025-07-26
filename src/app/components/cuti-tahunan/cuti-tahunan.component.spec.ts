import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutiTahunanComponent } from './cuti-tahunan.component';

describe('CutiTahunanComponent', () => {
  let component: CutiTahunanComponent;
  let fixture: ComponentFixture<CutiTahunanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutiTahunanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutiTahunanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
