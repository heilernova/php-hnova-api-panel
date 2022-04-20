import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseStructureComponent } from './database-structure.component';

describe('DatabaseStructureComponent', () => {
  let component: DatabaseStructureComponent;
  let fixture: ComponentFixture<DatabaseStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
