import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDbConnectionComponent } from './form-db-connection.component';

describe('FormDbConnectionComponent', () => {
  let component: FormDbConnectionComponent;
  let fixture: ComponentFixture<FormDbConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDbConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDbConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
