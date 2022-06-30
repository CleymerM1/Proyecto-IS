import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaNinioComponent } from './ropaninio.component';

describe('RopaNinioComponent', () => {
  let component: RopaNinioComponent;
  let fixture: ComponentFixture<RopaNinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaNinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaNinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
