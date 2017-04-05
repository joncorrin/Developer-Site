import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewallComponent } from './sidewall.component';

describe('SidewallComponent', () => {
  let component: SidewallComponent;
  let fixture: ComponentFixture<SidewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
