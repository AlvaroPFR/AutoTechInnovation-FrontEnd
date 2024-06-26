import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatShowComponent } from './chat-show.component';

describe('ChatShowComponent', () => {
  let component: ChatShowComponent;
  let fixture: ComponentFixture<ChatShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
