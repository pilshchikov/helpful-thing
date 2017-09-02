import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MethodForm} from '../services/method-form';
import {ApiService} from '../services/api.service';
import {MethodsFormService} from "../services/methods-form-service";

/**
 * Компонент со списком доступных методов для взаимодействия
 */
@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {
  /**
   * Объект с формами для отображения
   */
  formBuilder;

  /**
   * Статус режима мультиформы
   */
  multiform;

  constructor(private methodService: MethodsFormService) {
  }

  /**
   * Мапим статус и форму
   */
  ngOnInit() {
    this.methodService.getForm().subscribe(item => this.formBuilder = item);
    this.methodService.getMultiform().subscribe(item => this.multiform = item);
  }

  /**
   * Добавляем метод в список активных
   * @param {MethodForm} selectedMethod
   */
  selectMethod(selectedMethod: MethodForm) {
    this.methodService.addToSelected(selectedMethod);
  }

  /**
   * Чистим форму от всех методов
   */
  clearForms() {
    this.methodService.clearAllSelected();
  }

  /**
   * Включаем/выключаем рижим мультиформы
   */
  onToggle() {
    this.methodService.switchMultiform();
  }
}
