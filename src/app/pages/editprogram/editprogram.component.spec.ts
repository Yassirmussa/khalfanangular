import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogramComponent } from './editprogram.component';

describe('EditprogramComponent', () => {
  let component: EditprogramComponent;
  let fixture: ComponentFixture<EditprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
