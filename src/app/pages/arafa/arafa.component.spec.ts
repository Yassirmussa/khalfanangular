import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArafaComponent } from './arafa.component';

describe('ArafaComponent', () => {
  let component: ArafaComponent;
  let fixture: ComponentFixture<ArafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArafaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
