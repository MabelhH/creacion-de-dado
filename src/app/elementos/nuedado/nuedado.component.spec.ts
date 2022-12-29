import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuedadoComponent } from './nuedado.component';

describe('NuedadoComponent', () => {
  let component: NuedadoComponent;
  let fixture: ComponentFixture<NuedadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuedadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuedadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
