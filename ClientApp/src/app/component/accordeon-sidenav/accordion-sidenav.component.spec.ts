import { ComponentFixture, TestBed } from '@angular/core/testing';

import { accordionSidenavComponent } from './accordion-sidenav.component';

describe('AccordeonSidenavComponent', () => {
  let component: accordionSidenavComponent;
  let fixture: ComponentFixture<accordionSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ accordionSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(accordionSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
