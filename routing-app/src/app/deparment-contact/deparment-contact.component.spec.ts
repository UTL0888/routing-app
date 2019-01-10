import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentContactComponent } from './deparment-contact.component';

describe('DeparmentContactComponent', () => {
  let component: DeparmentContactComponent;
  let fixture: ComponentFixture<DeparmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
