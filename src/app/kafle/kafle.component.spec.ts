import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafleComponent } from './kafle.component';

describe('KafleComponent', () => {
  let component: KafleComponent;
  let fixture: ComponentFixture<KafleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});