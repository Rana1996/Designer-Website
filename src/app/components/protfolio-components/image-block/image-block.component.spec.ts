import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClockComponent } from './image-block.component';

describe('ImageClockComponent', () => {
  let component: ImageClockComponent;
  let fixture: ComponentFixture<ImageClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
