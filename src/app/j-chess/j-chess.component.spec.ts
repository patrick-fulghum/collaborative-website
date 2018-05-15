import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JChessComponent } from './j-chess.component';

describe('JChessComponent', () => {
  let component: JChessComponent;
  let fixture: ComponentFixture<JChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
