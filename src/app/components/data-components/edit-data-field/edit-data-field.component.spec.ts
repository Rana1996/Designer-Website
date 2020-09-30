import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataFieldComponent } from './edit-data-field.component';

describe('EditDataFieldComponent', () => {
  let component: EditDataFieldComponent;
  let fixture: ComponentFixture<EditDataFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
