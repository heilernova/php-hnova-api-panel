import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDlgTraceComponent } from './errors-dlg-trace.component';

describe('ErrorsDlgTraceComponent', () => {
  let component: ErrorsDlgTraceComponent;
  let fixture: ComponentFixture<ErrorsDlgTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsDlgTraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsDlgTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
