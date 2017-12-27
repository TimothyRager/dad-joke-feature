import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokeDisplayComponent } from './dad-joke-display.component';

describe('DadJokeDisplayComponent', () => {
  let component: DadJokeDisplayComponent;
  let fixture: ComponentFixture<DadJokeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadJokeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
