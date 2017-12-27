import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokeRequestComponent } from './dad-joke-request.component';

describe('DadJokeRequestComponent', () => {
  let component: DadJokeRequestComponent;
  let fixture: ComponentFixture<DadJokeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadJokeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
