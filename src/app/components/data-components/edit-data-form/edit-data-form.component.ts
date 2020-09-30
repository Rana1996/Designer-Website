import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-data-form',
  templateUrl: './edit-data-form.component.html',
  styleUrls: ['./edit-data-form.component.css']
})
export class EditDataFormComponent implements OnInit {
  @Input() field_name: string;
  @Output() editMode = new EventEmitter<boolean>();
  askIfSave: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {
    this.askIfSave = false;
  }

  ngOnInit(): void {
  }

  askToSave() {
    this.askIfSave = true;
  }

  save() { //TODO - Save changed value after connecting to MongoDB
    console.log('!!!!!!!! Before emit, value: ' + this.emailFormControl.value);
    this.askIfSave = false;
    this.editMode.emit(false);
  }

  cancel() {
    this.emailFormControl.reset();
    this.editMode.emit(false);
  }

  changedMyMind() {
    this.askIfSave = false;
  }
}
