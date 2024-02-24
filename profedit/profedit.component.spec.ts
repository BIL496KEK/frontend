import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeditComponent } from './profedit.component';

describe('ProfeditComponent', () => {
  let component: ProfeditComponent;
  let fixture: ComponentFixture<ProfeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
