import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotworyComponent } from './app-comp2.component';

describe('AppComp2Component', () => {
  let component: PotworyComponent;
  let fixture: ComponentFixture<PotworyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotworyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotworyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
