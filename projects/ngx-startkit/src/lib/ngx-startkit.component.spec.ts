import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStartkitComponent } from './ngx-startkit.component';

describe('NgxStartkitComponent', () => {
  let component: NgxStartkitComponent;
  let fixture: ComponentFixture<NgxStartkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStartkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStartkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
