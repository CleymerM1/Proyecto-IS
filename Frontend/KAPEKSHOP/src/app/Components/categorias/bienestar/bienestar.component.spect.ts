import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarComponent } from './bienestar.component';

describe('ElectronicaComponent', () => {
  let component: BienestarComponent;
  let fixture: ComponentFixture<BienestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
