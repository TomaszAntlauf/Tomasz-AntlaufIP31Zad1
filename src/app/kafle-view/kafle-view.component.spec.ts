import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafleViewComponent } from './kafle-view.component';

describe('KafleViewComponent', () => {
  let component: KafleViewComponent;
  let fixture: ComponentFixture<KafleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});