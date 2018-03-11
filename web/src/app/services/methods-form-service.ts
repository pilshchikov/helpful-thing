import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {MethodForm} from "./method-form";
import {Subject} from "rxjs/Subject";

/**
 * Form service
 */
@Injectable()
export class MethodsFormService {

  /**
   * @type {Subject<any>}   form channel
   */
  form = new Subject<any>();

  /**
   * Active forms list
   * @type {Array}
   */
  selectedMethods = [];

  /**
   * @type {Subject<Array<MethodForm>>}   active forms channel
   */
  selectedMethodsSubj = new Subject<Array<MethodForm>>();

  /**
   * @type {Subject<Boolean>}   Multiform notification channel
   */
  multiformSubj = new Subject<Boolean>();

  /**
   * @type {boolean} multiform toggle
   */
  multiform = false;

  constructor(private apiService: ApiService) {
    apiService.getMethods().subscribe(res => this.form.next(res));
  }

  /**
   * @returns {Observable<any>}    get form channel
   */
  getForm() {
    return this.form.asObservable();
  }

  /**
   * @returns {Observable<Array<MethodForm>>}   channel with active forms
   */
  getSelectedMethods() {
    return this.selectedMethodsSubj.asObservable();
  }

  /**
   * @returns {Observable<Boolean>}     multiform channel
   */
  getMultiform() {
    return this.multiformSubj.asObservable();
  }

  /**
   * Add form to active list
   * @param {MethodForm} method   form to add
   */
  addToSelected(method: MethodForm) {

    // for addition need to create new one with same fields
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
   * Clean selected forms
   */
  clearAllSelected() {
    this.selectedMethods = [];
    this.selectedMethodsSubj.next(this.selectedMethods);
  }

  /**
   * Toggle multiform state
   */
  switchMultiform() {
    this.multiform = !this.multiform;
    this.multiformSubj.next(this.multiform);
  }

  /**
   * Deleted specific form
   * @param {MethodForm}    method
   */
  deleteFromSelected(method: MethodForm) {
    this.selectedMethods = this.selectedMethods.filter(item => item.id != method.id);
    this.selectedMethodsSubj.next(this.selectedMethods);
  }

  /**
   * Execute method
   * @param values                params
   * @returns {Observable<any>}   response
   */
  executeMethod(values: any) {
    return this.apiService.executeMethod(values);
  }
}
