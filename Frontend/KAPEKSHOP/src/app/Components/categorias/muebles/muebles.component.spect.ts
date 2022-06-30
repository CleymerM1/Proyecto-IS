import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesComponent } from './muebles.component';

describe('ElectronicaComponent', () => {
  let component: MueblesComponent;
  let fixture: ComponentFixture<MueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
