import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCorreoComponent } from './validar-correo.component';

describe('ValidarCorreoComponent', () => {
  let component: ValidarCorreoComponent;
  let fixture: ComponentFixture<ValidarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
