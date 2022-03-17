import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesEcritsComponent } from './messages-ecrits.component';

describe('MessagesEcritsComponent', () => {
  let component: MessagesEcritsComponent;
  let fixture: ComponentFixture<MessagesEcritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesEcritsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesEcritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
