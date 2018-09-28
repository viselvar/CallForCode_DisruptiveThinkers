import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorViewComponent } from './indoor-view.component';

describe('IndoorViewComponent', () => {
  let component: IndoorViewComponent;
  let fixture: ComponentFixture<IndoorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
