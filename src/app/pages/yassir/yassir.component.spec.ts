import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YassirComponent } from './yassir.component';

describe('YassirComponent', () => {
  let component: YassirComponent;
  let fixture: ComponentFixture<YassirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YassirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YassirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
