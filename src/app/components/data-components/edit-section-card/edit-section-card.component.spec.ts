import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionCardComponent } from './edit-section-card.component';

describe('EditSectionCardComponent', () => {
  let component: EditSectionCardComponent;
  let fixture: ComponentFixture<EditSectionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSectionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
