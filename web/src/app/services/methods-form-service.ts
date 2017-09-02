import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {MethodForm} from "./method-form";
import {Subject} from "rxjs/Subject";

/**
 * Сервис форм методов
 */
@Injectable()
export class MethodsFormService {

  /**
   * @type {Subject<any>}   Канал для получения списка со всеми видами форм
   */
  form = new Subject<any>();

  /**
   * Активные формы методов
   * @type {Array}
   */
  selectedMethods = [];

  /**
   * @type {Subject<Array<MethodForm>>}   Канал для получения списка активных методов
   */
  selectedMethodsSubj = new Subject<Array<MethodForm>>();

  /**
   * @type {Subject<Boolean>}   Канал для получения статуса режима мультиформы
   */
  multiformSubj = new Subject<Boolean>();

  /**
   * @type {boolean} cтатус режима мультиформы
   */
  multiform = false;

  /**
   * Мапим поток с формой
   * @param {ApiService} apiService
   */
  constructor(private apiService: ApiService) {
    apiService.getMethods().subscribe(res => this.form.next(res));
  }

  /**
   * @returns {Observable<any>}    поток с объектом форм
   */
  getForm() {
    return this.form.asObservable();
  }

  /**
   * @returns {Observable<Array<MethodForm>>}   потом со спиской выбранных форм
   */
  getSelectedMethods() {
    return this.selectedMethodsSubj.asObservable();
  }

  /**
   * @returns {Observable<Boolean>}     Поток со режимом мультиформы
   */
  getMultiform() {
    return this.multiformSubj.asObservable();
  }

  /**
   * Добавляем форму выбранного метода в список активных форм
   * @param {MethodForm} method   выбранная форма
   */
  addToSelected(method: MethodForm) {

    // чтобы формы были независимыми приходится создавать новый объект
    let newMethod: MethodForm = {};

    if (method.hasOwnProperty('radios')) newMethod.radios = method.radios;
    if (method.hasOwnProperty('menus')) newMethod.menus = method.menus;
    if (method.hasOwnProperty('inputs')) newMethod.inputs = method.inputs;

    newMethod.methodDescription = method.methodDescription;
    newMethod.methodName = method.methodName;
    newMethod.executeBtn = method.executeBtn;
    newMethod.loadingState = false;
    newMethod.response = null;
    newMethod.learnMore = false;
    newMethod.id = Math.floor(Math.random() * (1000 - 10 + 1) + 10);

    if (this.multiform) {
      this.selectedMethods.push(newMethod);
    } else {
      this.clearAllSelected();
      this.selectedMethods.push(newMethod);
    }
    this.selectedMethodsSubj.next(this.selectedMethods);
  }

  /**
   * Чистим список активных форм
   */
  clearAllSelected() {
    this.selectedMethods = [];
    this.selectedMethodsSubj.next(this.selectedMethods);
  }

  /**
   * Меняем статус мультифромы
   */
  switchMultiform() {
    this.multiform = !this.multiform;
    this.multiformSubj.next(this.multiform);
  }

  /**
   * Удаляем определенную   форму метода
   * @param {MethodForm}    method
   */
  deleteFromSelected(method: MethodForm) {
    this.selectedMethods = this.selectedMethods.filter(item => item.id != method.id);
    this.selectedMethodsSubj.next(this.selectedMethods);
  }

  /**
   * Выпроняем метод с формы
   * @param values                параметры метода
   * @returns {Observable<any>}   ответ
   */
  executeMethod(values: any) {
    return this.apiService.executeMethod(values);
  }
}
