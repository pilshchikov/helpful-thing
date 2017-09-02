import {Component} from '@angular/core';
import {MethodForm} from '../services/method-form';
import {MethodsFormService} from "../services/methods-form-service";

/**
 * Компонент со списком методов
 */
@Component({
  selector: 'app-method-actions',
  templateUrl: './method-actions.component.html',
  styleUrls: ['./method-actions.component.css']
})
export class MethodActionsComponent {

  /**
   * Активные формы на страницы
   * @type {Array}
   */
  methods: Array<MethodForm> = [];

  /**
   * Статус режима мультиформы
   */
  multiform: Boolean;

  /**
   * Мапим список выбранных методов и статус выбран ли режим мультиформы
   * @param {MethodsFormService} methodService  сервис методов
   */
  constructor(private methodService: MethodsFormService) {
    this.methodService.getSelectedMethods().subscribe(item => this.methods = item);
    this.methodService.getMultiform().subscribe(item => this.multiform = item);
  }

  /**
   * Хэндлер на выполнение метода
   * @param {Array<string>} values  значения из формы метода
   * @param {MethodForm} form       на какой из форм произошло событие
   */
  onExecute(values: Array<string>, form: MethodForm) {
    form.loadingState = true;
    form.response = null;
    this.methodService.executeMethod(values).subscribe(item => form.response = item);
  }

  /**
   * Закрываем форму метода
   * @param {MethodForm} form   форма
   */
  close(form: MethodForm) {
    this.methodService.deleteFromSelected(form);
  }
}
