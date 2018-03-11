import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MethodForm} from '../../services/method-form';

@Component({
  selector: 'app-method-form',
  templateUrl: './method-form.component.html',
  styleUrls: ['./method-form.component.css']
})
export class MethodFormComponent {
  @ViewChild('addForm') addForm: NgForm;
  @Output() executeMethod = new EventEmitter<Array<string>>();
  @Input() method: MethodForm;

  constructor() {
  }

  /**
   * Submit form data to parent component
   *
   * @param {NgForm} submitForm         form data
   * @param {MethodForm} selectedForm   form type with be submitted
   */
  onSubmit(submitForm: NgForm, selectedForm: MethodForm) {
    submitForm.value.methodName = selectedForm.methodName;
    this.executeMethod.emit(submitForm.value);
  }
}
