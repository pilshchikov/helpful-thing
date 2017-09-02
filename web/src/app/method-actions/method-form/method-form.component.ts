import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MethodForm} from '../../services/method-form';

/**
 * Компонент отдельного метода
 */
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
   * На сабмит формы шлем данные в родительский компонент
   *
   * @param {NgForm} submitForm         заполненая форма
   * @param {MethodForm} selectedForm   с какой формы выполнили сабмит
   */
  onSubmit(submitForm: NgForm, selectedForm: MethodForm) {
    submitForm.value.methodName = selectedForm.methodName;
    this.executeMethod.emit(submitForm.value);
  }
}
