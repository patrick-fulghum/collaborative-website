import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMindComponent } from './master-mind.component';

describe('MasterMindComponent', () => {
  let component: MasterMindComponent;
  let fixture: ComponentFixture<MasterMindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterMindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
