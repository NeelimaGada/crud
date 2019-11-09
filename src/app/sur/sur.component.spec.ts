import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurComponent } from './sur.component';

describe('SurComponent', () => {
  let component: SurComponent;
  let fixture: ComponentFixture<SurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
