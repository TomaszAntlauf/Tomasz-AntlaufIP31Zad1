import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaViewComponent } from './tabela-view.component';

describe('TableViewComponent', () => {
  let component: TabelaViewComponent;
  let fixture: ComponentFixture<TabelaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});